"use strict";
const skills = ['Dev', 'DevOps', 'Testing'];
// Когда мы передаем перенной массив надо и его типизировать пример как здесь принимает массив строк и мы не можем здесь передать ничего кроме строк
for (const skill of skills) {
    console.log(skill);
}
const res = skills.filter((s) => s !== 'DevOps').map(s => s + {}).reduce((a, b) => a + b);
console.log(res);
//tsc - Компиляция ТС на JS
//node app.js - Запус скрипта в терминале IDE
