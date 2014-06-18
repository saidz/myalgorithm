/**
 * 一个长度为100的数组，里面的值都是{0...99}中的值
 * 如何查找重复的两个数
 *  TODO: 将dic中的值变成重复的次数,现在记录的是相等值间比对的次数
 */
var arr = [],
    dic = {}; // 数值超过一时表示有多个值

// 初始化数组
function init() {
    for (var i = 0; i < 100; i++) {
        arr.push(Math.floor(100 * Math.random()));
    }
    console.log(arr);
}

function swap(arr, i, j) {
    var t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
}
// 查找
// 是用二分法排序，在排序中将与边界相等的
function qsort(arr, i, j) {
    if (i >= j) {
        return;
    }
    var m = i;
    for (var n = i + 1; n <= j; n++) {
        // 记录一个值
        if(!dic[arr[n]]){
            dic[arr[n]] =1;
        }
        // 记录值相等的比对的次数
        if (arr[n] === arr[i]) {
                dic[arr[n]] += 1;
        }
        if (arr[n] < arr[i]) {
            swap(arr, ++m, n);
        }
    }
    swap(arr, i, m);
    qsort(arr, i, m - 1);
    qsort(arr, m + 1, j);
}
function add(obj){
    var result = 0;
    for(var pro in obj){
        if(obj.hasOwnProperty(pro)){
            result += obj[pro];
        }
    }
    return result;
}

init();
qsort(arr, 0, 99);
console.log(arr);
console.log(dic);
console.log(add(dic));