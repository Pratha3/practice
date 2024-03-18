function merge(arr, si, mid, ei) {
    var leftindex = si
    var rightindex = mid + 1
    var x = si
    var temp = []
    while (leftindex <= mid && rightindex <= ei) {
        if (arr[leftindex] < arr[rightindex]) {
            temp[x++] = arr[leftindex++]
        } else {
            temp[x++] = arr[rightindex++]
        }
    }
    while (leftindex <= mid) {
        temp[x++] = arr[leftindex++]
    }
    while (rightindex <= ei) {
        temp[x++] = arr[rightindex++]
    }
    for (var i = si; i <= ei; i++) {
        arr[i] = temp[i]
    }
}
function mergesort(arr, si, ei) {
    if (si < ei) {
        var mid = Math.floor((si + ei) / 2)
        mergesort(arr, si, mid)
        mergesort(arr, mid + 1, ei)
        merge(arr, si, mid, ei)
    }
}
var arr = [1, 3, 5, 8, 4, 2, 9, 6, 7]
mergesort(arr, 0, arr.length - 1)
console.log(arr)