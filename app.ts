function getFullName(userEntity: {firstName:string, lastName: string, age: number}): string {
    return `${userEntity.firstName} ${userEntity.lastName} ${userEntity.age}`
}

const user = {
    firstName: 'Anton',
    lastName: 'Johan',
    city: 'Moscow',
    age: 33,
    skills: {
        dev: true,
        devOps: true,
    }
};


console.log(getFullName(user));
//tsc - Компиляция ТС на JS
//node app.js - Запус скрипта в терминале IDE