class MVVM {
    constructor(options) {
        //先把可用的东西挂在到实例上
        this.$el = options.el;
        this.$data = options.data;
        //如果有要编译的模板，需要开始编译模板
        if (this.$el) {
            //数据劫持
            new Observer(this.$data);
            this.proxyData(this.$data);
            //用元素和数据进行编译
            new Compile(this.$el, this);
        }
    }
    proxyData(data){
        Object.keys(data).forEach((key)=>{
            Object.defineProperty(this,key,{
                get(){
                    return data[key]
                },
                set(newValue){
                    data[key] = newValue
                }
            })
        })
    }
}
