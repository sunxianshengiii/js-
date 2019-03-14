class EventEmitter {
    constructor() {
        this.sub = {}
    }

    on(eventName, fn) {
        if (this.sub[eventName]) return;
        if (!this.sub[eventName]) this.sub[eventName] = [];
        this.sub[eventName].push(fn)
    };

    emit(eventName) {
        const argsList = Array.prototype.slice.call(arguments, 1);
        for (let i = 0; i < this.sub[eventName].length; i++) {
            this.sub[eventName][i].apply(this, argsList)
        }
    };

    removeEvent(eventName) {
        if (this.sub[eventName]) {
            delete this.sub[eventName];
        }
    }
}


function a() {
    console.log('你好函数a')
}

function b() {
    console.log('你好函数b')
}

let events = new EventEmitter();
events.on('你好', a);
events.on('你也好', b);
events.emit('你好');
events.removeEvent('你好');



 class Event extends EventEmitter{
     constructor(){
         super()
     }
 }
