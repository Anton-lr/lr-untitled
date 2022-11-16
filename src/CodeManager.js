import { useState, useEffect } from 'react';
import CodeEditor from './CodeEditor';
import { combineLists, createBoundsObj, myStringify, myFunction } from './functions';
import Printer from './Printer';
import Keyframes from './Keyframes'

const CodeManager = ({name, code, setCode }) => {
    const [keyframes, setKeyframes] = useState([[0]])
    const [values, setValues] = useState([])
    const [width, setWidth] = useState([])
    const [height, setHeight] = useState([])
    const [x, setX] = useState([])
    const [y, setY] = useState([])
    const [string, setString] = useState("")


    useEffect(() => {
        let o = ""
        if (name === "TimeRemapper") {
            o = "timeRemapper = createTimeRemapper(" + myStringify(code) + ") " + "\n"
        }
        if (name === "Focuser") {
            o = "getCamFocus = createFocuser(" + myStringify(code) + ") " + "\n"
        }
        if (name === "Zoomer") {
            o = "getAutoZoom = createZoomer(" + myStringify(code) + ") " + "\n"
        }
        if (name === "BoundsPanner") {
            o = "getCamBounds = createBoundsPanner(" + myStringify(code) + ")" + "\n"
        }
        setString(o)
    }, [code])

    function save (add = false) {
        if (name === "BoundsPanner") {
            const a = createBoundsObj(width, height, x, y)
            setValues(a)
        }
        let a = combineLists(keyframes, values)
        if (add) {
            a = code.concat(a)
        }
        setCode(a)
        
    }
    
    //<div className="manager">Keyframes  <CodeEditor type="keyframes" data={keyframes} addData={setKeyframes} deleteData={() => setKeyframes([])} /></div>
    return (
        <div className="testicles">
            <div className="codeSection">
                <div className="manager">
                    <p>Keyframes</p>
                    <Keyframes data={keyframes} addData={setKeyframes} type="keyframes" />
                </div>
            <div className="manager main">
                    <p>Current code</p>
                    <div className="ui">
                        <div className="interact">
                            <div className="dataInteract">
                                <button onClick={() => myFunction("copier")}>Copy text</button>
                                <input defaultValue={string} className="copyToClipboard" id="copier"></input>
                                <button>read (wip)</button>
                            </div>
                            <div className="dataInteract">
                                <button className="dataOperation" onClick={() => save(true)}>Add</button>
                                <button className="dataOperation" onClick={() => save()}>Set</button>
                                <button className="dataOperation" onClick={() => setCode([])}>Delete</button>
                            </div>
                        </div>
                        <div className="display">
                            length: {code.length}
                            <Printer data={code} setData={setCode} type="code" />
                        </div>
                    </div>

                </div>

                {name !== "BoundsPanner" && <div className="manager"><p>Values</p>     <CodeEditor type="values" data={values} addData={setValues} deleteData={() => setValues([])} /> </div>}
                {name === "BoundsPanner" && <div className="manager"><p>Width</p>      <CodeEditor type="width" data={width} addData={setWidth} deleteData={() => setWidth([])} /></div>}
                {name === "BoundsPanner" && <div className="manager"><p>Height</p>     <CodeEditor type="height" data={height} addData={setHeight} deleteData={() => setHeight([])} /></div>}
                {name === "BoundsPanner" && <div className="manager"><p>X</p>          <CodeEditor type="x" data={x} addData={setX} deleteData={() => setX([])} /></div>}
                {name === "BoundsPanner" && <div className="manager"><p>Y </p>         <CodeEditor type="y" data={y} addData={setY} deleteData={() => setY([])} /></div>}

            </div>
        </div>
    )
}
export default CodeManager;