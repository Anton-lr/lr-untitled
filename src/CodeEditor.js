import { useState } from 'react';
import { dataEvent } from "./functions.js"
import InputButton from './inputButton.js';
import Printer from './Printer.js';

const CodeEditor = ({data, addData, deleteData, type }) => {

    const [offset, setOffset] = useState("");
    const [duration, setDuration] = useState("");
    const [initialData, setInitialData] = useState("");
    const [targetData, setTargetData] = useState("");
    const [expr, setExpr] = useState("i / (d - 1)");

    return (
        <div className="ui">
            <div className="interact">
                <div className="options">
                    <div><InputButton type={type} state={offset} setState={setOffset} /><div>offset</div></div>
                    <div><InputButton type={type} state={duration} setState={setDuration} /><div>duration</div></div>
                    <div><InputButton type={type} state={initialData} setState={setInitialData} /><div>start</div></div>
                    <div><InputButton type={type} state={targetData} setState={setTargetData} /><div>end</div></div>
                    <div><InputButton type={type} state={expr} setState={setExpr} /><div>expr</div></div>
                </div>
                <div className= "setExpression">
                    <button className="expression" onClick={() => setExpr("i / (d - 1)")}>/ linear </button>
                    <button className="expression" onClick={() => setExpr("(i / (d - 1))^ 2")}>┌ curve </button>
                    <button className="expression" onClick={() => setExpr("1 - (1 - i / (d - 1))^ 2")}>┘ curve </button>
                </div>
                <div className="dataInteract">
                    <button className="dataOperation" onClick={() => addData(data.concat(
                        dataEvent(
                            offset,
                            parseInt(duration),
                            Number(initialData),
                            Number(targetData),
                            expr, type))) }>Add</button>
                    <button className="dataOperation" onClick={() => addData(
                        dataEvent(
                            offset,
                            parseInt(duration),
                            Number(initialData),
                            Number(targetData),
                            expr, type))}>Set</button>
                    <button className="dataOperation" onClick={() => deleteData()}>Delete</button>
                </div>
            </div>
            <div className="display">
                length: {data.length}
                <Printer data={data} setData={addData} type={type} />
            </div>
        </div>
   
    )
}

export default CodeEditor;
