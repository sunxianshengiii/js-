function Cat(name) {
    this.age = 19;
    this.name = name;
    this.run = function () {
        console.log(`我是${this.name},我${this.age}岁`)
    }

}

let cat = new Cat('毛毛');
cat.run();

/*
* 1,创建一个空对象
* 2,给函数上下文赋值，   新对象 = this
*
*
*
* 如果构造函数没有返回值，就返回这个新对象this
* 如果返回值是简单类型，  那么会被忽略
* 如果返回值是一个引用类型（不包括null），会把引用类型返回到实例上
*
* */



// 函数式一等公民，所谓一等公民值得就是，与其它数据类型一样，处于平等地位，可以赋值给任何变量，可以作为参数，传入另一个函数中，或者作为变的函数的返回值


// Array.prototype.sort 可以对数组中的元素进行排序，排序的算法是根据字符串比较大小的算法来排序，不适合于数字的排序

let arr = [99,111,222,5,7,644,733];

console.log(arr);
console.log(arr.sort());

arr.sort(function (a,b) { //函数式编程，一个函数做完另一个函数的输入
    return a-b;

});
console.log(arr);
