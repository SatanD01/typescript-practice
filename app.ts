// type httpMethod = 'post' | 'get';
// type coolString = string;
// Так же можно определаить одиночные типы и передать в нужное место

type User = {
    name: string,
    age: number,
    skills: string[],
}
// Так определяется тип объектов когда надо его повторно переиспользовать

type Role = {
    name: string,
    // Если в обеех обектах есть одни и те же переменные
    // то надо сделать новый тип объектов с указанием 2 объектов по отдельности
    id: number
}

type UserWithRole = User & Role;
// Этот type Alias используется для обеденения нескольких типов объектов в один объект

type UserWithRole2 = {
    user: User,
    role: Role
}

let user: UserWithRole = {
    name: 'asd',
    age: 33,
    skills: ['1', '2'],
    id: 1
}

//tsc - Компиляция ТС на JS
//node app.js - Запус скрипта в терминале IDE