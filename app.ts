function logId(id: string | number | boolean) {
    if (typeof id === 'string') {
        console.log(id)
    } else if (typeof id === "number"){
        console.log(id)
    } else  {
        console.log(id)
    }
}
// Union типы - это когда в передаются типы через | и передается типы переменных которые могут поступать.
// Обычно используем Union когда фильтруем приходящие данные по типу


function logError(err: string | string[]) {
    if (Array.isArray(err)){
        console.log(err)
    }else  {
        console.log(err)
    }
}


function logObject(obj: {a: number} | {b: number}) {
    if ('a' in obj) {
        console.log(obj.a)
    } else  {
        console.log(obj.b)
    }
}

// Фильтрация Union обектов


function logMultiple(a: string | number, b: string | boolean){
    if (a === b ) {
        console.log(a.toLowerCase)
    } else  {
        console.log(a)
    }
}


//tsc - Компиляция ТС на JS
//node app.js - Запус скрипта в терминале IDE