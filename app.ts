let revenue: number = 1000;
let bonus: number =  500;
let c: string = 'sdf';
let d: boolean = true;
// после названия переменной надо указать тип переменной что бы ТС строго типизировал наши переменные и не допускал ошибочных данных

let res: number = revenue + bonus;

console.log(res);
//tsc - Компиляция ТС на JS
//node app.js - Запус скрипта в терминале IDE