import { framesToTs } from './frameConversion';
const Parser = require('expr-eval').Parser;

export const combineLists = (l1, l2) => {
    const ret  = []
    if (l1.length === l2.length) {
        for (var i = 0; i<l1.length; i++) {
            let temp = []
            temp.push(l1[i])
            temp.push(l2[i])
            ret.push(temp)
        }
        return ret
    }
    
    alert("lengths of 'keyframes' and 'values' must be of the same length'")
    return []
    
}

export const createBoundsObj = (l1, l2, l3, l4) => {
    const ret = []
    for (var i = 0; i < l1.length; i++) {
        let temp = {}
        temp["w"]=  l1[i]
        temp["h"] = l2[i]
        temp["x"] = l3[i]
        temp["y"] = l4[i]
        ret.push(temp)
    }
    return ret
}

//TODO: evalute using Parser from npm install expr-eval
export const dataEvent = (offset, duration, start, end, expr, type) => {
    const vals = []
    if (isNaN(duration) && (start === 0 || end === 0)) {
        if (type === "keyframes") {
            vals.push(framesToTs(Math.max(start, end) + Number(offset)) )
            return vals;
        }
        const a = Math.max(start, end) + Number(offset)
        vals.push(a)
        return vals;
    }
    if (isNaN(duration)) {
        duration = Math.abs(end - start) + 1
    }
    offset = Number(offset) + start
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


export function myStringify(obj) {
    const json = JSON.stringify(obj);  // {"name":"John Smith"}
    const unquoted = json.replace(/"([^"]+)":/g, '$1:');
    return unquoted;
}

export function myFunction(elementID) {
    // Get the text field
    var copyText = document.getElementById(elementID);

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // Alert the copied text
    alert("Copied the text: " + copyText.value);
}