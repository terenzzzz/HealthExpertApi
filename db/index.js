//导入 mysql 模块
const mysql = require('mysql')

const db = mysql.createPool({
    host: '46.101.60.239',
    user: 'server',
    password: '592592',
    database:'AndroidAPI'
})

module.exports = db