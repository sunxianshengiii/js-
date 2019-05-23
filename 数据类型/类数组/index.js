//数组&类数组


//类数组的属性要为索引，必须要有length属性，最后有Push属性，当它加上splice方法时，会变成一个数组的样子
//类数组可以扩展数组的方法，也有数组的特性，同时又拥有对象类型的特性
let similarArr = {
    "0": 'a',
    "1": 'b',
    "2": 'c',
    "3": 'd',
    "length": 4,
    "push": Array.prototype.push,
    "splice": Array.prototype.splice
};
similarArr.push('e');
console.log(similarArr);

//类数组push方法依据length属性，length是多少，就从索引为几的位置替换或者添加
let testSimilarArr = {
    "0": 'a',
    "1": 'b',
    "2": 'c',
    "length": 2,
    "push": Array.prototype.push
};

testSimilarArr.push('d');
console.log(testSimilarArr);

//原因
//  Array.prototype.push = function (target) {
//    this[this.length] = target;
//    this.length++
//  };
