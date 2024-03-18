const MaxSumSubArray = (arr) => {
    var max = 0
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
        if (sum > max) {
            max = sum
        }
        if (sum < 0) {
            sum = 0
        }
    }
    console.log(max)
}
var arr = [10, -5, 9, 4, 3, -2, -1, 6, 7, -8]
MaxSumSubArray(arr)