var arr = [7, 8, 5, 6, 3, 1, 2, 4]
for (var i = 0; i < arr.length - 1; i++) {
    for (j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            var temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
        console.log(arr);
    }
    console.log('---------phase end------');
}
console.log(arr)