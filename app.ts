const skill: readonly [number, string] = [1, 'Dev'];
// Есил стоит readonly то мы не можем изменять тот или иной массив skill[0] = 2; так как мы можем только читать этот массив
// Если не стоит readonly то мы сможем изменить массив вне зависимости константа она или нет

const skills: Array<string> = ['Dev', 'DevOps'];
// Это альтернативная запись для определения массива строк
const skillsReadonly: ReadonlyArray<string> = ['Dev', 'DevOps'];
// Это альтернативная запись для определения массива строк с типом readonly


//tsc - Компиляция ТС на JS
//node app.js - Запус скрипта в терминале IDE