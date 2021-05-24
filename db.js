const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    user: 'your username',
    password: 'your password',
    host: 'localhost',
    port: 3306,
    database: 'todotutorial'
})

module.exports = pool;
