// 导入数据库操作模块
const db = require('../db/index')

// 获取用户卡路里模块数据
exports.trainings = (req, res) => {
    const sqlQuery = `select * from Trainings where idUser=?`
    db.query(sqlQuery, req.user.idUser, (err, results) => {
        if (err) return res.cc(err)
        if (results.length > 0) {
            res.send({ status: 200, message: '获取用户训练信息成功！', data: results})
        } else {
            return res.cc('获取用户训练信息失败！')
        }
    })
}

exports.addTraining = (req, res) => {
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth()+1;
    let date = today.getDate();
    let startTime = year + "-" + (month + 1) + "-" + date + " " + req.body.startTime + ":00"
    let endTime = year + "-" + (month + 1) + "-" + date + " " + req.body.endTime + ":00"
    const sqlInsert = `insert into Trainings set ?`
    db.query(sqlInsert, {
        idUser: req.user.idUser,
        Type: req.body.type,
        Title: req.body.title,
        Distance: req.body.distance,
        Speed: req.body.speed,
        CaloriesBurn: req.body.caloriesBurn,
        StartTime: startTime,
        EndTime: endTime,
    }, function (err, results) {
        if (err) return res.cc(err)
        if (results.affectedRows == 1) {
            res.send({ status: 200, message: '添加训练数据成功！'})
        } else {
            return res.cc('添加训练数据失败！')
        }
    })
}

exports.addLocations = (req, res) => { 
    // var locations = [
    //     { latitude: 53.3805467, longitude: -1.4769983 },
    //     { latitude: 53.3805467, longitude: -1.4769983 },
    //     { latitude: 53.3805467, longitude: -1.4769983 },
    // ];
    // var str = JSON.stringify(locations);
    // var data2 = JSON.parse(str);
    // console.log(str);
    // console.log(data2);

    const sqlInsert = `INSERT INTO TrainingLocations (idTraining,Latitude,Longitude) VALUES ?`
    const locations = JSON.parse(req.body.locations)
    // console.log(locations);
    const data = []
    locations.forEach((v,i) => {
        data.push([1,v.latitude,v.longitude])
    });

    db.query(sqlInsert, [data], (err, results) => { 
        if (err) { return res.cc(err) }
        if (results.affectedRows >= 1) { 
            return res.send({
                status: 0,
                message: '定位添加成功'
            })
        }
        return res.cc('定位添加失败')
    })
}