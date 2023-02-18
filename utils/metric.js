

function walkingMet() {
    return 3.5
}

function runningMet() {
    return 7.0
}

function cyclingMet() {
    return 7.5
}

function stepLength(height) {
    // height(cm)
    return 0.414 * height //cm
}

function distance(steps, stepLength) {
    // stepLength(cm)
    return (steps * stepLength) / 100000 //km
}


function calories(weight, distance, met) {
    // weitht(kg)
    // distance(km)
    return weight * distance * 0.621371 * met //kcal
}

module.exports = {walkingMet,runningMet,cyclingMet,stepLength,distance,calories}