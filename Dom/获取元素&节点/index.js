/*
* DOM  Document Object Model
* Dom定义了表示文档和操作文档的方法。DOM对象即为宿主对象，由浏览器厂商定义。是用来操作xml和html功能的一类对象集合/用来操作html以及xml的标准编程接口
* document 代表整个文档的js显示形式
* */


// //在IE8一下不区分大小写，name属性同样适用
document.getElementById('word');
//
// //返回一个类数组，IE9 以下浏览器没有该方法
document.getElementsByClassName('hello');
//
// //返回一个类数组
document.getElementsByTagName('div');
//
// //name 属性具有特殊意义，所以理论上只有部分标签适用
document.getElementsByName('password');
//
// //理想形式。直接传入css选择器。  但是选择的元素不是实时的，后期增加的元素都与他没有关系
document.querySelector('');
document.querySelectorAll('');


//                                  节点

/*  节点类型    元素节点  --- 1,  属性节点 --- 2, 文本节点 --- 3;
 *
 *             注释节点  --- 8, document --- 9, DocumentFragment --- 11;
 *
 * */

let div = document.getElementsByClassName('hello')[0];

//父节点，最顶层节点是document
div.parentNode;
//子节点
div.childNodes;
//第一个子节点
div.firstChild;
//最后一个子节点
div.lastChild;
//下一个兄弟节点
div.nextSibling;
//上一个兄弟节点
div.previousSibling;


//元素节点树,除children之外所有方法IE9一下都不支持

//父元素节点，最顶层元素节点是document
div.parentElement;
//子元素节点,
div.children;
//子元素节点个数
div.childElementCount;
//第一个子元素
div.firstElementChild;
//最后一个子元素
div.lastElementChild;
//下一个兄弟元素节点
div.nextElementSibling;
//上一个兄弟元素节点
div.previousElementSibling;


//节点属性


//元素大写标签名
div.nodeName;
//Text节点或者是Comment节点的文本内容，可读写，只有文本节点或者是注释节点有;
div.nodeValue;
//读取改节点的类型;
div.nodeType;
//Element 节点的属性集合
div.attributes;
// div.getAttribute('')
// div.setAttribute('')


//节点方法

//是否有子节点
div.hasAttributeNS();









