interface User {
    name: string
}

interface User {
    age: number
}
// Интерфайс отличается от Type тем что тут можно до определаить какой либо Интерфей
// Но им лучше не злоупотреблять. Так можно польщоваться когда не возможно объеденить интерфейсы
// через Extends USer, User

const user: User = {
    name: 'asd',
    age: 23
}


type Id = string | number;

interface  IDI {
    ID: string | number
}

// для Обектов лучше использовать Interface а для обычных определений типов лучше использовать type

//tsc - Компиляция ТС на JS
//node app.js - Запус скрипта в терминале IDE