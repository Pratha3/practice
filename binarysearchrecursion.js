function Binary(arr, target, start, end) {
    if (start > end) {
        return false
    }
    var mid = Math.floor((start + end) / 2)
    if (arr[mid] == target) {
        return true
    } else if (arr[mid] > target) {
        return Binary(arr, target, start, mid - 1)
    } else {
        return Binary(arr, target, mid - 1, end)
    }
    return false
}
var arr = [10, 20, 30, 40, 50, 60]
var target = 60
if (Binary(arr, target, 0, arr.length - 1)) {
    console.log('element found');
} else {
    console.log('element not found');
}