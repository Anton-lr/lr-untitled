import { framesToTs, tsToFrames } from './frameConversion';
const Parser = require('expr-eval').Parser;

export const combineLists = (l1, l2) => {
    const ret  = []
    if (l1.length == l2.length) {
        for (var i = 0; i<l1.length; i++) {
            let temp = []
            temp.push(l1[i])
            temp.push(l2[i])
            ret.push(temp)
        }
    }
    console.log(ret)
    return ret
}

//TODO: evalute using Parser from npm install expr-eval
export const dataEvent = (offset, duration, start, end, expr, type) => {
    const vals = []
    console.log("s: ", start)
    console.log("e: ", end)
    console.log("d: ", duration)
    if (isNaN(duration) && (start === 0 || end === 0)) {
        console.log("detected")
        vals.push(framesToTs(Math.max(start, end)))
        return vals;
    }

    if (isNaN(duration)) {
        duration = Math.abs(end - start) + 1
    }
    if (offset === "") {
        offset = start
        console.log(offset)
    }  

 



    const parser = new Parser();
    let e = parser.parse(expr)
    
    for (var i = 0; i < duration; i++) {
        let s = e.evaluate({ i: i, d:duration })
        let d = Number(offset) + s * (end - start)
        if (type === "keyframes") {
            d = framesToTs(d)
        }
        vals.push(d)
    }

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