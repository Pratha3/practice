function partion(arr, si, ei) {
    var pivot = arr[ei]
    var i = si - 1
    for (var j = si; j <= ei; j++) {
        if (arr[j] < pivot) {
            i++
            var temp = arr[j]
            arr[j] = arr[i]
            arr[i] = temp
        }
    }
    var temp = arr[i + 1]
    arr[i + 1] = arr[ei]
    arr[ei] = temp
    return i + 1
}

function quicksort(arr, si, ei) {
    if (si < ei) {
        const partition = partion(arr, si, ei)
        quicksort(arr, si, partition - 1)
        quicksort(arr, partition + 1, ei)
    }
}
var arr = [1, 9, 8, 2, 3, 7, 6, 4, 5]
quicksort(arr, 0, arr.length - 1)
console.log(arr);