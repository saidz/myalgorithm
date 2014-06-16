/**
 * 只使用运算符'++',来实现加减乘除运算
 */
// 加法
function add(a, b) {
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
function sub(a, b) {
    return add(a, -b);
}

// 乘法
function multi(a, b) {
    if (a === 0 || b === 0) return 0;
    var max = Math.max(a, -a);
    var i = 1,
        result = b;
    while (i < max) {
        i++;
        result = add(result, b);
    }
    return a > 0 ? result : -result;
}
// TODO :除法
function div(a, b) {
    if (a === 0) return 0;
    if (b === 0) return 'NaN';
    var flag = Math.max(a, b) > 0 && Math.min(a, b) < 0 ? -1 : 1;
    var a = Math.max(a, -a);
    var b = Math.max(b, -b);
    var i = j = 0;
    while (true) {
        if (a >= multi(j, b) && a < multi(++j, b)) {
            break;
        }
        i++;
    }
    return flag<0 ? -i : i;
}

function log(fn, result) {
    console.log(fn.name, ':', result);
}

console.log('....................add................');
log(add, add(1, 5)); // 6
log(add, add(1, -5)); //-4
log(add, add(-91, -5)); //-96
console.log('....................sub.................');
log(sub, sub(5, 1)); // 4
log(sub, sub(-5, 1)); // -6
log(sub, sub(-5, -1)); // -4
log(sub, sub(-5, 0)); // -5
console.log('....................multi.................');
log(multi, multi(5, 1)); // 4
log(multi, multi(-5, 1)); // -6
log(multi, multi(-5, -1)); // -4
log(multi, multi(-5, 0)); // -5
log(multi, multi(-500, 100)); // -5
console.log('....................multi.................');
log(div, div(0, 1)); // 0
log(div, div(1, 0)); // NaN
log(div, div(1100, 30)); // 36
log(div, div(1100, -30)); // -36
log(div, div(-1100, 30)); // -36
log(div, div(-10, 30)); // 0
log(div, div(10, 30)); // 0
