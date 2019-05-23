class Observer {
    constructor(data) {
        this.observer(data)
    }

    observer(data) {
        //把数据都变成get和set的形式
        if (!data || typeof data !== 'object') {
            return;
        }
        //先获取到data的key 和value
        Object.keys(data).forEach(key => {
            this.defineReactive(data, key, data[key]);
            this.observer(data[key])
        })
    }

    defineReactive(obj, key, value) {
        let _this = this;
        let dep = new Dep();
        Object.defineProperty(obj, key, {
            enumerable: true,
            configurable: true,
            get() {
                Dep.target && dep.addSub(Dep.target);
                return value;
            },
            set(newVlaue) {
                if (newVlaue !== value) {
                    _this.observer(newVlaue);
                    value = newVlaue;
                    dep.notify();
                }
            }
        })
    }
}

class Dep {
    constructor() {
        this.subs = [];

    }

    addSub(watcher) {
        this.subs.push(watcher)
    }

    notify() {
        this.subs.forEach(watcher => watcher.update())
    }
}
