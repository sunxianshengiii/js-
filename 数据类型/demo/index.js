let app = {
    type: (target) => {//判断传入数据类型
        let template = {
            "[object Array]": "array",
            "[object Object]": "object",
            "[object Number]": "number-object",
            "[object String]": "string-object",
            "[object Boolean]": "boolean-object"
        };
        if (target === null) {
            return 'null'
        } else if (typeof(target) === 'object') {
            let str = Object.prototype.toString.call(target);
            return template[str];
        } else {
            return typeof(target)
        }
    },
    unique:(array)=>{ // 数组去重
        let uniqueObj = {};
        let uniqueArr = [],len = array.length;
        for(let i = 0;i<len;i++){
            if(!uniqueObj[array[i]]){
                uniqueObj[array[i]] = 'unique';
                uniqueArr.push(array[i])
            }
        }
        return uniqueArr
    }
};

let arr = [1,1,1,1,1,2,3,3,3,2,2];
console.log(app.unique(arr));
