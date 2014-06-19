/**
 * 一个长度为100的数组，里面的值都是{0...99}中的值
 * 如何查找重复的两个数
 *  TODO: 将dic中的值变成重复的次数,现在记录的是相等值间比对的次数
 */
var cd = {};
var dic = {}; // 数值超过一时表示有多个值

// 初始化数组
cd.init = function init() {
    var arr =[];
    for (var i = 0; i < 100; i++) {
        arr.push(Math.floor(100 * Math.random()));
    }
    return arr;
}

function swap(arr, i, j) {
    var t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
}
// TODO:count of number
// 查找
// 使用快速排序，在排序中将与边界相等的值记录下来
cd.qsort = function qsort(arr, i, j) {
    if (i >= j) {
        return;
    }
    var m = i;
    for (var n = i + 1; n <= j; n++) {
        // 记录一个值
        // if(!dic[arr[n]]){
        //     dic[arr[n]] =1;
        // }
        // // 记录值相等的比对的次数
        // if (arr[n] === arr[i]) {
        //         dic[arr[n]] += 1;
        // }
        if (arr[n] < arr[i]) {
            swap(arr, ++m, n);
        }
    }
    swap(arr, i, m);
    qsort(arr, i, m - 1);
    qsort(arr, m + 1, j);
}

module.exports = cd;