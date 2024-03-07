var arr = [10, 20, 30, 40, 50]
var ele = 30
var result = false
for (var i = 0; i < arr.length; i++) {
    if (arr[i] == ele) {
        flag = true
        console.log('element found at', i, arr[i])
        break
    }
}
if (!flag) {
    console.log('not found')
}