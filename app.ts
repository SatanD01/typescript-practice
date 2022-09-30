const skill: [number, string] = [1, 'Dev'];
// Использование Tuples тоесть ограниценный массив в нем может хранится только указанное
// Количество массив типов тоесть [number, string] = [1, 'Dev']

const [id, skillName] = skill;

// const id = skill[0];
// const skillName = skill[1];

skill.push('test');
// Даже если мы через push добавим элемент в массив мы не сможем кнему обратиться skill[2]

const arr: [number, string, ...boolean[]] = [1, 'test', false, false, true];


//tsc - Компиляция ТС на JS
//node app.js - Запус скрипта в терминале IDE