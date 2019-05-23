class Compile {
    constructor(el, vm) {
        this.el = this.isElementNode(el) ? el : document.querySelector(el);
        this.vm = vm;
        if (this.el) {
            //如果有原始就能获取到，再开始编译

            //把这些真实的DOM移入到内存中
            let fragment = this.node2fragment(this.el);
            //编译=>提取想要的元素节点 V-model 和文本节点  {{}}
            this.compile(fragment);
            //放到页面上
            this.el.appendChild(fragment);
            fragment = null;
        }
    }

    //辅助方法
    isElementNode(node) {
        return node.nodeType === 1;
    }

    isDirective(name) {
        return name.includes('v-');
    }

    //核心方法
    compile(fragment) {
        let childNodes = fragment.childNodes;
        Array.from(childNodes).forEach(node => {
            if (this.isElementNode(node)) {
                //是元素节点,递归调用
                //编译元素
                this.compileElement(node);
                this.compile(node);

            } else {//是文本节点
                this.compileText(node)
            }
        })
    }

    node2fragment(el) {
        //把获取到的dom移动到内存中 文档碎片
        let fragment = document.createDocumentFragment();
        let firstChild;
        while (firstChild = el.firstChild) {
            fragment.appendChild(firstChild)
        }
        return fragment;//内存中的节点

    }

    compileElement(node) {
        let attrs = node.attributes;
        Array.from(attrs).forEach(attr => {
            let attrName = attr.name;
            if (this.isDirective(attrName)) {//取值，放入节点
                let expr = attr.value;
                let [, type] = attrName.split('-');
                CompileUtils[type](node, this.vm, expr);
            }
        })
    }

    compileText(node) {
        let expr = node.textContent;
        let reg = /\{\{([^}]+)\}\}/g;
        if (reg.test(expr)) {
            CompileUtils['text'](node, this.vm, expr);

        }
    }
}

CompileUtils = {
    getVal(vm, expr) {
        expr = expr.split('.');
        return expr.reduce((prev, next) => {
            return prev[next];
        }, vm.$data);
    },
    getTextVal(vm, expr) {
        return expr.replace(/\{\{([^}]+)\}\}/g, (...arguments) => {
            return this.getVal(vm, arguments[1]);
        });
    },
    text(node, vm, expr) {  //处理文本
        let updateFn = this.updater['textUpdater'];
        let value = this.getTextVal(vm, expr);
        expr.replace(/\{\{([^}]+)\}\}/g, (...arguments) => {
            new Watcher(vm, arguments[1], (newVlaue) => {
                updateFn && updateFn(node, this.getTextVal(vm, expr))

            })
        });
        updateFn && updateFn(node, value)
    },
    setValue(vm, expr,value) {
            expr = expr.split('.');
            return expr.reduce((prev,next,currentIndex)=>{
                if(currentIndex === expr.length-1){
                    return prev[next] = value
                }
                return prev[next]
            },vm.$data)
    },
    model(node, vm, expr) {  //处理输入框
        let updateFn = this.updater['modeUpdater'];
        new Watcher(vm, expr, (newVlaue) => {
            updateFn && updateFn(node, this.getVal(vm, expr))

        });
        node.addEventListener('input', (e) => {
             this.setValue(vm, expr, e.target.value)
        });
        updateFn && updateFn(node, this.getVal(vm, expr))

    },
    updater: {
        //文本更新
        textUpdater(node, value) {
            node.textContent = value
        },
        //输入框更新
        modeUpdater(node, value) {
            node.value = value;
        }
    }
};
