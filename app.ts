interface User {
    login: string;
    password?: string;
}

type User2 = {
    login: string;
    password?: string;
}
// Если при передаче данных не требуется какие либо данные то перед : надо ставить занк ?
// тогда можно будет не определять тот или иной тип
// Это работает также и с type
const user: User = {
    login: 'a@a.com',
}



//tsc - Компиляция ТС на JS
//node app.js - Запус скрипта в терминале IDE