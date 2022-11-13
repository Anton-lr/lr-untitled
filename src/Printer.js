import { printTs } from "./frameConversion";

const Printer = ({ data, setData, type }) => {
    //offset, duration, initialData, targetData¨
    if (typeof (data) === "undefined") {
        return ;
    }

    function myPrint(f, type = "v") { // use map
        let d = f
        if (type === "keyframes") {
            d = printTs(d)
        }
        if (type === "code") {
            //d = "[[" + (d[0]) + "], " + d[1] + "],"
            const json = JSON.stringify(f);  // {"name":"John Smith"}
            const unquoted = json.replace(/"([^"]+)":/g, '$1:');
            d = unquoted
        }
        return d

    }

    function generateList(s) {
        const a = Array.from(Array(s.length).keys()).map(i => {
            return(
            <div className="litem" key={i.toString()} >
                <button className="removeItem" onClick={() => ri(s, i)}> remove </button>
                <button className="deleteBelow" onClick={() => db(s, i)}> slice </button>

                {myPrint(s[i], type)}
            </div>)
    
        })
        return a
    }

    function db(list, i) {
        const dd = list.slice(0, i)
        setData(dd)
    }

    function ri(list, i) {
        const ed = list.slice(0, i).concat(list.slice(i + 1, list.length))
        setData(ed)
    }

    function codePrint(list) {
        const vals = []
        for (var i = 0; i < list.length; i++) {
            const d = "[" + printTs(list[0]) + ", " + list[1] + "]"
            vals.push(<div className="vitem" id={i}>{d}</div>)
        }
        return vals
    }
    const a = generateList(data)
    return a;
}

export default Printer;