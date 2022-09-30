"use strict";
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 1] = "SUCCESS";
    StatusCode["IN_PROCESS"] = "p";
    StatusCode["FIELD"] = "f";
})(StatusCode || (StatusCode = {}));
const res = {
    message: 'Pay Done',
    statusCode: StatusCode.SUCCESS
};
if (res.statusCode === StatusCode.SUCCESS) {
}
const res2 = 1 /* Roles.ADMIN */;
//tsc - Компиляция ТС на JS
//node app.js - Запус скрипта в терминале IDE
