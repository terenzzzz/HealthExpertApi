// 导入数据库操作模块
const db = require('../db/index')

// 获取用户信息
exports.userInfo = (req, res) => {
    const sqlQuery = `select idUser,Email,Name,Age,Height,Weight,Bmi,BodyFatRate from User where idUser=?`
    db.query(sqlQuery, req.user.idUser, (err, results) => {
        if (err) return res.cc(err)
        if (results.length !== 1) return res.cc('获取用户信息失败！')
        res.send({ status: 0, message: '获取用户基本信息成功！', data: results[0]})
    })
}

exports.editName = (req, res) => { 
    const sqlUpdate = `update User set Name = ? where idUser = ?`
    db.query(sqlUpdate, [req.body.name, req.user.idUser], (err, results) => {
        if(err) return res.cc(err.message)
        if (results.affectedRows===1){
            return res.send({
                status: 0,
                message:'更新昵称成功'
            })
        }
        return res.cc('更新失败')
    })
}

exports.editAge = (req, res) => { 
    const sqlUpdate = `update User set Age = ? where idUser = ?`
    db.query(sqlUpdate, [req.body.age, req.user.idUser], (err, results) => {
        if(err) return res.cc(err.message)
        if (results.affectedRows===1){
            return res.send({
                status: 0,
                message:'更新年龄成功'
            })
        }
        return res.cc('更新失败')
    })
}

exports.editHeight = (req, res) => { 
    const sqlUpdate = `update User set Height = ? where idUser = ?`
    db.query(sqlUpdate, [req.body.height, req.user.idUser], (err, results) => {
        if(err) return res.cc(err.message)
        if (results.affectedRows===1){
            return res.send({
                status: 0,
                message:'更新身高成功'
            })
        }
        return res.cc('更新失败')
    })
}

exports.editWeight = (req, res) => { 
    const sqlUpdate = `update User set Weight = ? where idUser = ?`
    db.query(sqlUpdate, [req.body.weight, req.user.idUser], (err, results) => {
        if(err) return res.cc(err.message)
        if (results.affectedRows===1){
            return res.send({
                status: 0,
                message:'更新体重成功'
            })
        }
        return res.cc('更新失败')
    })
}