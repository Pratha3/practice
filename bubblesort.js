var arr = [7, 8, 5, 6, 3, 1, 2, 4]
for (var i = 0; i < arr.length - 1; i++) {
    for (j = 0; j < arr.length - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            var temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp
        }
        console.log(arr);
    }
    console.log('---------phase end------');
}
console.log(arr)