---
layout: post
category: "javascript"
title:  "Javascript 函数"
tags: [javascript]
---
Javascript学习笔记
```
函数通常以函数声明的方式定义，比如：

function sum (num1, num2) {
    return num1 + num2;
}
注意函数定义最后没有加分号。

另一种定义函数的语法是函数表达式。函数表达式与函数声明几乎是等价的：
let sum = function(num1, num2) {
    return num1 + num2;
};
代码定义了一个变量 sum 并将其初始化为一个函数。注意 function 关键字后面没有名称，
因为不需要。这个函数可以通过变量 sum 来引用.
注意这里的函数末尾是有分号的，与任何变量初始化语句一样.

### 箭头函数（arrow function）

let sum = (num1, num2) => {
    return num1 + num2;
};

```
