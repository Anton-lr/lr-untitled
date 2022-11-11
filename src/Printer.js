import { printTs } from "./frameConversion";

const Printer = ({ data, setData, type }) => {
    //offset, duration, initialData, targetData¨

    if (typeof (data) === "undefined") {
        return ;
    }

    function generateList() {
        const rets = []
        for (var i = 0; i < data.length; i++) {
            const d = <div className="litem" id={i}>
                    <button className="deleteBelow" onClick={db(i)}> delete below </button>
                    <button className="removeItem" onClick={ri(i)}> delete below </button>
                <p className=""> {codePrint(data[i], type)} </p>
                </div>;
            rets.push(d)
        }
        return rets
    }

    function db(i) {
        const dd = data.slice(0, i)
        setData(dd)
    }

    function ri(i) {
        const ed = data.slice(0, i).concat(data.slice(i+1, data.length))
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
    const a = generateList()

    return a;
}

export default Printer;