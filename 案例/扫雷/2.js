function DataBinder(object_id) {
  let pubSud = {
    callback: {},
    on: function (msg, callback) {
      this.callback[msg] = this.callback[msg] || [];
      this.callback[msg].push(callback);
    },
    publish: function (msg) {
      this.callback[msg] = this.callback[msg] || [];
      for (let i = 0; i < this.callback[msg.length]; i++) {
        this.callback[msg][i].apply(this, arguments)
        Object.defineProperty()
      }

    }
  }
}
