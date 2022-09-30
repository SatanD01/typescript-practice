"use strict";
function getFullName(firstName, lastName) {
    // if (typeof firstName !== "string") {
    //     throw new Error('!!!!');
    // //   Если из вне приходят даные то надо использовать такую проверку на типы в другиз случаях не обязательно использовать проверку на типы
    // }
    return `${firstName} ${lastName}`;
}
const getFullNameArrow = (firstName, lastName) => {
    return `${firstName} ${lastName}`;
};
console.log(getFullName('Anton', 'Johan'));
//tsc - Компиляция ТС на JS
//node app.js - Запус скрипта в терминале IDE
