/**
 * 只使用运算符'++',来实现加减乘除运算
 */
var calculation = {};

// 加法
calculation.add = function (a, b) {
    var result, j = 0,
        tmp, flag = 1;
    var min = Math.min(a, b);
    var max = Math.max(a, b);
    // 都小于零时 的处理
    if (max < 0) {
        tmp = min;
        min = -max;
        max = -tmp;
        flag = -1;
    }

    while (j < max) {
        min++;
        j++;
    }
    result = min;

    return flag == 1 ? result : -result;
}

// 减法
calculation.sub = function (a, b) {
    return this.add(a, -b);
}

// 乘法
calculation.multi = function (a, b) {
    if (a === 0 || b === 0) return 0;
    var max = Math.max(a, -a);
    var i = 1,
        result = b;
    while (i < max) {
        i++;
        result = this.add(result, b);
    }
    return a > 0 ? result : -result;
}

// 除法
calculation.div = function (a, b) {
    if (a === 0) return 0;
    if (b === 0) return 'NaN';
    var flag = Math.max(a, b) > 0 && Math.min(a, b) < 0 ? -1 : 1;
    var a = Math.max(a, -a);
    var b = Math.max(b, -b);
    var i = j = 0;
    while (true) {
        if (a >= this.multi(j, b) && a < this.multi(++j, b)) {
            break;
        }
        i++;
    }
    return flag<0 ? -i : i;
}
// var r1 = calculation.add(1,2);
// console.log(r1);
module.exports = calculation;

