var startBtn = document.getElementById('btn');
var box = document.getElementById('box');
var flafBox = document.getElementById('flafBox');
var alertBox = document.getElementById('alertBox');
var msg = document.getElementById('msg');
var flagNum = document.getElementById('flagNum');
var close = document.getElementById('close');
var minesNum, mineOver, mineMap = [], block, key = true;
bindEvent();

function bindEvent() {
    startBtn.onclick = function (e) {
        this.style.display = 'none';
        box.style.display = 'block';
        flafBox.style.display = 'block';
        init()
    };
    box.oncontextmenu = function () {
        return false
    };
    box.onmousedown = function (e) {
        let event = e.target;
        if (e.which === 1) {
            leftClick(event)
        } else if (e.which === 3) {
            rightClick(event)
        }
    };
    close.onclick = function () {
        alertBox.style.display = 'none';
        startBtn.style.display = 'block';
        box.style.display = 'none';
        box.innerHTML = ''
    }
}

function init() {
    minesNum = 10;
    mineOver = 10;
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let con = document.createElement('div');
            con.classList.add('block');
            con.setAttribute(`id`, `${i}-${j}`);
            box.appendChild(con);
            mineMap.push({mine: 0})
        }
    }
    block = document.getElementsByClassName('block');
    while (minesNum) {
        var mineIndex = Math.floor(Math.random() * 100);
        if (mineMap[mineIndex].mine === 0) {
            block[mineIndex].classList.add('torpedo');
            mineMap[mineIndex].mine = 1;
            minesNum--;
        }
    }
}

function leftClick(dom) {
    if (dom && dom.classList.contains('flag')) {
        return;
    }
    let torpedo = document.getElementsByClassName('torpedo');
    if (dom && dom.classList.contains('torpedo')) {
        for (let i = 0; i < torpedo.length; i++) {
            torpedo[i].style.backgroundColor = "#FFF";
            torpedo[i].innerHTML = '*';
        }
        setTimeout(function () {
            alertBox.style.display = 'block'
            msg.innerText = '游戏结束'
        }, 800)
    } else {
        let n = 0;
        var posArr = dom && dom.getAttribute('id').toString().split('-');
        var posX = posArr && +posArr[0];
        var posY = posArr && +posArr[1];
        dom && dom.classList.add('num');
        for (let i = posX - 1; i <= posX + 1; i++) {
            for (let j = posY - 1; j <= posY + 1; j++) {
                let aroundBox = document.getElementById(`${i}-${j}`);
                if (aroundBox && aroundBox.classList.contains('torpedo')) {
                    n++
                }
            }
        }
        dom && (dom.innerHTML = n);
        if (n === 0) {
            for (let i = posX - 1; i <= posX + 1; i++) {
                for (let j = posY - 1; j <= posY + 1; j++) {
                    let nearBox = document.getElementById(`${i}-${j}`);
                    if (nearBox && nearBox.length !== 0) {
                        if (nearBox && !nearBox.classList.contains('check')) {
                            nearBox.classList.contains('checked');
                            leftClick(nearBox)
                        }
                    }
                }
            }
        }
    }
}

function rightClick(dom) {
    if (dom && dom.classList.contains('num')) {
        return;
    }
    if (mineOver > 0) {
        if (dom.classList.contains('flag')) {
            dom.classList.remove('flag');
            mineOver++;
        } else {
            dom.classList.add('flag');
            mineOver--;
        }
    } else {
        if (dom.classList.contains('flag')) {
            dom.classList.remove('flag');
            mineOver++;
        }
    }

    flagNum.innerHTML = mineOver;
    var dilei = document.getElementsByClassName('torpedo');
    var count = 0;
    for (var i = 0; i < dilei.length; i++) {
        if (dilei[i].classList.contains('flag')) {
            count++;
        }
    }
    if (count === 10) {
        alertBox.style.display = 'block';
        msg.innerText = '恭喜过关'
    }
}
