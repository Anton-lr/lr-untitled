import { useState } from 'react';
import { dataEvent } from "./functions.js"
import InputButton from './inputButton.js';
import dropdown from "./dropdown";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


const CodeEditor = ({data, addData, deleteData }) => {

    const [offset, setOffset] = useState("");
    const [duration, setDuration] = useState("");
    const [initialData, setInitialData] = useState("");
    const [targetData, setTargetData] = useState("");
    const [expr, setExpr] = useState("i / (d - 1)");

    return (
        <div className="ui">
            <div className="options">
                <p>offset<InputButton state={offset} setState={setOffset} /></p>
                <p>duration<InputButton state={duration} setState={setDuration} /></p>
                <p>start<InputButton state={initialData} setState={setInitialData} /></p>
                <p>end<InputButton state={targetData} setState={setTargetData} /></p>
                <p>expr<InputButton state={expr} setState={setExpr} /></p>
            </div>
            <div className= "setExpression">
                <button onClick={() => setExpr("i / (d - 1)")}>linear</button>
                <button onClick={() => setExpr("(i / (d - 1))^ 2")}>exponential increase </button>
                <button onClick={() => setExpr("1 - (1 - i / (d - 1))^ 2")}>exponential decrease </button>
            </div>
            <div className="dataInteract">
                <button className="dataOperation" onClick={() => addData(data.concat(
                    dataEvent(
                        offset,
                        parseInt(duration),
                        Number(initialData),
                        Number(targetData),
                        expr))) }>add data</button>
                <button className="dataOperation" onClick={() => deleteData()}>delete data</button>
            </div>
        </div>
    )
}

export default CodeEditor;
