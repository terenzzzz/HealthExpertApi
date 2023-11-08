//导入 mysql 模块
const mysql = require('mysql')

const db = mysql.createPool({
    host: '47.106.139.89',
    user: 'root',
    password: '592592',
    database: 'AndroidAPI',
    // timezone: 'utc'
})

module.exports = db