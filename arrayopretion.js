
//inserting
var arr = [10, 20, 30]
var pos = 1
var ele = 100
for (var i = arr.length; i > pos; i--) {
    arr[i] = arr[i - 1]
}
arr[pos] = ele
console.log(arr);



//deleting
var array = [20, 30, 40, 60, 90]
var position = 1
for (var i = position; i < arr.length; i++) {
    array[i] = array[i + 1]
}
array.length--
console.log(array)




//updating
var listofarray = [10, 20, 30];
var at = 1;
var newElement = 100;

for (var i = 0; i < listofarray.length; i++) {
    if (i === at) {
        arr[i] = newElement;
        break;
    }
}
console.log(listofarray);

