class Watcher {//观察者
    constructor(vm, expr, cb) {
        this.vm = vm;
        this.expr = expr;
        this.cb = cb;
        this.value = this.get()
    }
    getVal(vm, expr) {
        expr = expr.split('.');
        return expr.reduce((prev, next) => {
            return prev[next];
        }, vm.$data);
    }
    get(){
        Dep.target = this;
        let value = this.getVal(this.vm,this.expr);
        Dep.target = null;
        return value
    }
    update(){//对外暴露方法
        let newVlaue = this.getVal(this.vm,this.expr);
        let oldVlaue = this.value;
        if(newVlaue!==oldVlaue){
            this.cb(newVlaue)
        }
    }
}
