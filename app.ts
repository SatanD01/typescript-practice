function fetchWithAuth(url: string, method: 'post' | 'get'): 1 | -1 {
    return 1
}

fetchWithAuth('https://localhost', 'post')

let a:'a' = 'a'

let method = 'post'
fetchWithAuth('https://localhost', method as 'post')

//tsc - Компиляция ТС на JS
//node app.js - Запус скрипта в терминале IDE