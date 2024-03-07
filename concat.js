var arr1 = [10, 20, 30, 40]
var arr2 = [100, 200, 300, 400]
var arr3 = []
for (var i = 0; i < arr1.length; i++) {
    arr3[i] = arr1[i]
}
for (var i = 0; i < arr2.length; i++) {
    arr3[arr3.length] = arr2[i]
}
console.log(arr3);