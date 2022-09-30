enum StatusCode {
    SUCCESS = 1,
    IN_PROCESS = 'p',
    FIELD = 'f'
}

const res = {
    message: 'Pay Done',
    statusCode: StatusCode.SUCCESS
}


if (res.statusCode === StatusCode.SUCCESS) {

}

const enum Roles {
    ADMIN = 1,
    USER = 2
}

const res2 = Roles.ADMIN;

//tsc - Компиляция ТС на JS
//node app.js - Запус скрипта в терминале IDE