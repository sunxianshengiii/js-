// 求num的阶乘
function factorial(num) {
    if (num === 1) {
        return 1
    }
    return num * factorial(num - 1)

}

console.log(factorial(10));

function fibonacci(num) {
    if (num === 1) return 1;
    if (num === 0) return 0;
    return fibonacci(num - 1) + fibonacci(num - 2)
}

console.log(fibonacci(5));
