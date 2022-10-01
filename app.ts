interface User {
    name: string,
    age: number,
    skills: string[],

    log: (id: number) => string;
}

interface Role {
    roleId: number
}

interface userWithRole extends User, Role{
    createdAt: Date;
}

type User2 = {
    name: string,
    age: number,
    skills: string[],

    log: (id: number) => string;
}


let user: userWithRole = {
    name: 'asd',
    age: 12,
    skills: ['1', '2'],
    roleId: 1,
    createdAt: new Date(),
    log(id) {
        return ''
    }
}

interface UserDic {
    [index: number]: User
}

type UserDic2 = {
    [index: string]: User
}


//tsc - Компиляция ТС на JS
//node app.js - Запус скрипта в терминале IDE