function greeting(name, timeOfDay) {
    return `Hello ${name}. Have a great ${timeOfDay}`
}

console.log(greeting("will", "morning"))

function fahrToCels(fahrTemp) {
    return (fahrTemp - 32) * 5 / 9;
}

console.log(fahrToCels(32))

function heronsFormula(a, b, c) {
    s = (a + b + c) / 2
    return Math.sqrt(s * (s - a) * (s - b) * (s - c))
}

console.log(heronsFormula(3, 4, 5))

function heightCheck(height) {
    if (height >= 82) {
        return "All Aboard!";
    } else {
        return "Too short for ride."
    }
}

console.log(heightCheck(100))

function analyzeNumber(nAnalyze) {
    if (nAnalyze > 0) {
        return "positive";
    } else if (nAnalyze < 0) {
        return "negative";
    } else if (nAnalyze === 0) {
        return "zero"
    }
}

console.log(analyzeNumber(-2))

function gradeFeedback(grade) {
    if (grade >= 80) {
        return "Good job";
    } else if (grade >= 50) {
        return "passable";
    } else if (grade < 50) {
        return "Keep trying";
    }
}

console.log(gradeFeedback(80))

function abs(nAbs) {
    if (nAbs > 0) {
        return nAbs;
    } else if (nAbs < 0) {
        return nAbs + (nAbs * -2)
    } else if (nAbs === 0) {
        return 0;
    }
}

console.log(abs(-45692345990))

function isEven(nIsEven) {
    if (nIsEven % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(-5))

function isDivisibleBy(nDivisible, divisor) {
    if (nDivisible % divisor === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isDivisibleBy(-18, 4))

function pointLocation(x, y) {
    if (x === 0 && y === 0) {
        return "origin";
    } else if (y === 0) {
        return "x-axis";
    } else if (x === 0) {
        return "y-axis";
    } else if (x > 0 && y > 0) {
        return "quadrant I";
    } else if (x < 0 && y > 0) {
        return "quadrant II";
    } else if (x < 0 && y < 0) {
        return "quadrant III";
    } else if (x > 0 && y < 0) {
        return "quadrant IV";
    } 
}

console.log(pointLocation(1, -1))

function ordinalAdjective(nOrdinal) {
    if (nOrdinal === 1) {
        return "1st";
    } else if (nOrdinal === 2) {
        return "2nd";
    } else if (nOrdinal === 3) {
        return "3rd";
    } else {
        return nOrdinal + "th";
    }
}

console.log(ordinalAdjective(9))

function minPayment(balance) {
    
}
