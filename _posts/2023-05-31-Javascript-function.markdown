---
layout: post
category: "javascript"
title:  "Javascript 函数"
tags: [javascript]
---
学习笔记
函数通常以函数声明的方式定义，比如：
function sum (num1, num2) {
return num1 + num2;
}
注意函数定义最后没有加分号。
另一种定义函数的语法是函数表达式。函数表达式与函数声明几乎是等价的：
let sum = function(num1, num2) {
return num1 + num2;
};
箭头函数”（ arrow function）
let sum = (num1, num2) => {
return num1 + num2;
};
