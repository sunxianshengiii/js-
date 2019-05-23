window.onload = function () {
    let canvas = document.getElementById('canvas');
    let prize = document.getElementById('prize');
    let ctx = canvas.getContext('2d');
    let arr = ['兰博基尼', '一个亿', '一等奖', '二等奖'];
    ctx.beginPath();//开始路径
    ctx.rect(0, 0, 300, 150);//绘制一个矩形
    ctx.fillStyle = '#c0c0c0';
    ctx.fill(); //填充
    ctx.closePath(); //关闭路径


    function move(e) {
        let x = e.clientX;
        let y = e.clientY;
        ctx.clearRect(x, y, 20, 20);
    }

    canvas.addEventListener('mousedown', (e) => {
        canvas.addEventListener('mousemove', move, false)
    });
    canvas.addEventListener('mouseup', () => {
        canvas.removeEventListener('mousemove', move, false)
    }, false);

    function soiji() {
        let index = Math.floor(Math.random() * 4);
        prize.innerText = arr[index]
    }

    soiji()
};

