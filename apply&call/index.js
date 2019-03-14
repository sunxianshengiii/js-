function sum(a, b) {
    console.log(this,111);
    return a + b;
}

let value = 1;
let obj = {
    value: 2
};
Function.prototype.mycall = function (context) {
    context = context || window;
    context.fn = this;
    let args = [];
    for (let i = 1; i < arguments.length; i++) {
        args.push(arguments[i])
    }
    // let result = eval('context.fn(' + args + ')');
    let result = context.fn(...args);
    delete context.fn;
    return result;
};

console.log(sum.mycall(obj, 2, 3));
/**
 * 如果给apply，或者是call传递的第一个值是简单类型（值类型，原始类型）都会出现一些变化
 * 如果传递的第一个参数是Null/undefined,那么this，就只想window
 * 如果是String,Number,Boolean会转成相应的包装类型
 *
 *
 *
 *
 */
