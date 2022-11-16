import {useState} from "react"
import { framesToTs, tsToFrames } from "./frameConversion"
import InputButton from "./inputButton"
import Printer from "./Printer"

const Keyframes = ({ data, addData,  deleteData, type }) => {

    const [offset, setOffset] = useState(0)
    const [interval, setInterval] = useState(1)
    const [repetitions, setRepetitions] = useState(1)
    const [start, setStart] = useState(1)
    const [end, setEnd] = useState(5)

    const generateList = (start, end, interval, offset, repetitions) => {
        let so = start + offset
        const eo = end + offset
        const ret = []
        if (start >= end) {
            alert("start >= end is not valid")
            return []
        }
        if (interval===0) {
            alert("interval cannot be 0")
            return []
        }
        if (interval > end - start) {
            alert("interval cannot be larger than the difference between start and end")
            return []
        }

        while (so < end+offset) {
            ret.push(framesToTs(so))
            so += interval
            if (so > eo) {
                alert("there was a remainder")
                break
            }
        }
        console.log(JSON.stringify(ret))
        addData(ret)
        return ret
    }

    const updateOffset = () => {
        setOffset(tsToFrames(data[data.length - 1]))
        console.log("offset: ", offset)
    }

    function addSingle() {
        const d = framesToTs(Number(start) + Number(offset))
        console.log(d)
        addData(data.concat([d]))
    }

    const add = () => {
        const d = generateList(Number(start), Number(end), Number(interval), Number(offset))
        addData(data.concat(d))
    }

    const set = () => {
        const d = generateList(start, end, interval, offset, repetitions)
        addData(d)
    }

    return (
        <div className="ui">
            <div className="interact">
                <div className="options">
                    <div><InputButton type={type} state={offset} setState={setOffset} /><div>offset</div></div>
                    <div><InputButton type={type} state={repetitions} setState={() => alert("wip")} /><div>repetitions (wip)</div></div>
                    <div><InputButton type={type} state={interval} setState={setInterval} /><div>interval</div></div>
                    <div><InputButton type={type} state={start} setState={setStart} /><div>start</div></div>
                    <div><InputButton type={type} state={end} setState={setEnd} /><div>end</div></div>
                </div>
                <div className="dataInteract">
                    <button className="dataOperation" onClick={() => updateOffset()}>set offset to last frame</button>
                </div>
                <div className="dataInteract">
                    <button className="dataOperation" onClick={() => addSingle()}>add "start" as single frame</button>
                </div>
                <div className="dataInteract">
                    <button className="dataOperation" onClick={() => add()}>Add</button>
                    <button className="dataOperation" onClick={() => set()}>Set</button>
                    <button className="dataOperation" onClick={() => addData([0])}>Delete</button>
                </div>
            </div>
            <div className="display">
                length: {data.length}
                <Printer data={data} setData={addData} type={type} />
            </div>
        </div>
    )
}

export default Keyframes;