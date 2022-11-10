const Parser = require('expr-eval').Parser;

function evaluator() {
    const parser = new Parser();
    let expr = parser.parse("i / t - 1^2")
}

//TODO: evalute using Parser from npm install expr-eval
export const dataEvent = (offset, duration, start, end, expr) => {

    if (isNaN(duration)) {
        duration = Math.abs(end - start) + 1
    }
    if (offset === "") {
        offset = start
        console.log(offset)
    }  

    const vals = []
    const parser = new Parser();
    let e = parser.parse(expr)
    
    for (var i = 0; i < duration; i++) {
        let s = e.evaluate({ i: i, d:duration })
        const d = Number(offset) + s * (end - start)
        vals.push(d)
    }
    console.log(vals)
    return vals
    /*
    for (var i = 0; i < duration; i++) {
        const k = (end / duration) * i
        let s = e.evaluate({x : k})
        const d = Number(offset) + s * (end - start)
        console.log("offset: ", offset)
        vals.push(d)
    }
    console.log(vals)
    return vals
    */
}

function linear(offset, duration, start, end) {
    const vals = []
    for (var i = 0; i < duration; i++) {
        const k = (i / (duration - 1))
        const d = offset + k * (end - start)
        vals.push(d)
    }
    return vals
}

function exponential(offset, duration, start, end) {
    const vals = []
    for (var i = 0; i < duration; i++) {
        const k = (i / (duration - 1)) ** 2
        const d = offset + k * (end - start)
        vals.push(d)
    }
    return vals
}