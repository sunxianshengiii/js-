// DOM的基本操作
// document.createElement('div');　　//创建一个节点
//
// document.createAttribute('Hello'); //对某个节点创建属性
//
// document.createTextNode(text);　　　//创建文本节点

// document.insertBefore(newNode,referenceNode);　 //在某个节点前插入节点

// parentNode.appendChild(newNode);　　　　　　　　//给某个节点添加子节点

// cloneNode(true | false)          //复制某个节点  参数：是否复制原节点的所有属性

// parentNode.removeChild(node);　　//删除某个节点的子节点 node是要删除的节点

// replace(newNode,oldNode); //节点替换


// 修改文本节点
// appendData(data);	将data加到文本节点后面
// deleteData(start,length);	将从start处删除length个字符
// insertData(start,data);	在start处插入字符,start的开始值是0;
// replaceData(start,length,data);	在start处用data替换length个字符
// splitData(offset);	在offset处分割文本节点
// substringData(start,length);	从start处提取length个字符


// getAttribute(name,value)     //获取节点属性
// setAttribute(name,value);  //修改某个节点属性的值
// removeAttribute(name);　 //删除某个属性

