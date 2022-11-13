import { useState, useEffect } from 'react';
import CodeEditor from './CodeEditor';
import { framesToTs, framesToTsString , printTs } from "./frameConversion";
import { combineLists, createBoundsObj, myStringify, myFunction } from './functions';
import Printer from './Printer';

const CodeManager = ({name, code, setCode }) => {
    const [keyframes, setKeyframes] = useState([[0]])
    const [values, setValues] = useState([])
    const [width, setWidth] = useState([])
    const [height, setHeight] = useState([])
    const [x, setX] = useState([])
    const [y, setY] = useState([])
    const [string, setString] = useState("")

    function save (add = false) {
        console.log(code)
        if (name === "BoundsPanner") {
            const a = createBoundsObj(width, height, x, y)
            setValues(a)
        }
        let a = combineLists(keyframes, values)
        if (add) {
            a = code.concat(a)
        }
        setCode(a)

        let o = ""
        if (name === "TimeRemapper") {
            o = "timeRemapper = createTimeRemapper([" + myStringify(code) + "]) " + "\n"
        }
        if (name === "Focuser") {
            o = "getCamFocus = createFocuser([" + myStringify(code) + "]) " + "\n"
        }
        if (name === "Zoomer") {
            o = "getAutoZoom = createZoomer([" + myStringify(code) + "]) " + "\n"
        }
        if (name === "BoundsPanner") {
            o = "getCamBounds = createBoundsPanner([" + myStringify(code) + "])" + "\n"
        }

        setString(o)
    }

 

    return (
        <div className="testicles">
  
            <div className="codeSection">
                <div className="manager">Keyframes  <CodeEditor type="keyframes" data={keyframes} addData={setKeyframes} deleteData={() => setKeyframes([])} /></div>
                {name !== "BoundsPanner" && <div className="manager">Values     <CodeEditor type="values" data={values} addData={setValues} deleteData={() => setValues([])} /></div>}
                {name === "BoundsPanner" && <div className="manager">Width     <CodeEditor type="width" data={width} addData={setWidth} deleteData={() => setWidth([])} /></div>}
                {name === "BoundsPanner" && <div className="manager">Height     <CodeEditor type="height" data = {height} addData={setHeight} deleteData={() => setHeight([])} /></div>}
                {name === "BoundsPanner" && <div className="manager">X          <CodeEditor type="x" data={x} addData={setX} deleteData={() => setX([])} /></div>}
                {name === "BoundsPanner" && <div className="manager">Y          <CodeEditor type="y" data={y} addData={setY} deleteData={() => setY([])} /></div>}
                
                <div className="manager">
                    Current code
                    <div className="ui">
                        <div className="interact">
                            <div className="dataInteract">
                                <button className="save" onClick={() => save()}>save</button>
                                <button className="delete" onClick={() => setCode([])}>delete</button>
                                <button className="delete" onClick={() => save(true)}>add</button>
                                <button onClick={() => myFunction("copier")}>Copy text</button>
                                <input defaultValue={string} type="hidden" className="copyToClipboard" id="copier"></input>
                            </div>
                        </div>
                        <div className="display">
                            <Printer className="display" data={code} setData={setCode} type={"code"} />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default CodeManager;