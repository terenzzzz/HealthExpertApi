function bmi(weight, height) {
    // weight (kg)
    // height (cm)
    return weight/Math.pow((height/100),2)
}

function bodyFatRate(bmi,age,gender) {
    // 体脂百分比 = (1.20 * BMI) + (0.23 * 年龄) - (10.8 * 性别) - 5.4
    return (1.20 * bmi) + (0.23 * age) - (10.8 * gender) - 5.4
}

module.exports = {bmi, bodyFatRate}