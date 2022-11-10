import { useState, useEffect } from 'react';
import CodeEditor from './CodeEditor';
import {framesToTs} from "./frameConversion";

const CodeManager = ({name, code, setCode }) => {

    const [keyframes, setKeyframes] = useState([])
    const [values, setValues] = useState([])
    const [width, setWidth] = useState([])
    const [height, setHeight] = useState([])
    const [x, setX] = useState([])
    const [y, setY] = useState([])

    let k = ""
    let v = ""
    useEffect(() => {
        k = myPrint(keyframes)
        v = myPrint(values)
    }, [keyframes, values])

    function myPrint(list, type="v") {
        const vals = []
        for (var i = 0; i<list.length;i++) {
            let d = list[i]
            if (type === "keyframes") {
                d = framesToTs(list[i])
            }
            vals.push(<div className="vitem" id={i}>{d}</div>)
        }
        return vals
    }

  
    return (
        <div className="codeSection">
                                        <div className="manager">Keyframes  <CodeEditor data={keyframes} addData={setKeyframes}  deleteData={() => setKeyframes([])} />  {myPrint(keyframes, "keyframes")}</div>
            {name !== "BoundsPanner" && <div className="manager">Values     <CodeEditor data={values} addData={setValues} deleteData={() => setValues([])} />     {myPrint(values)}</div>}
            {name === "BoundsPanner" && <div className="manager">Width      <CodeEditor addData={setWidth}      deleteData={() => setWidth([])} />      {width}</div>}
            {name === "BoundsPanner" && <div className="manager">Height     <CodeEditor addData={setHeight}     deleteData={() => setHeight([])} />     {height}</div>}
            {name === "BoundsPanner" && <div className="manager">X          <CodeEditor addData={setX}          deleteData={() => setX([])} />          {x}</div>}
            {name === "BoundsPanner" && <div className="manager">Y          <CodeEditor addData={setY}          deleteData={() => setY([])} />          {y}</div>}

        
        </div>
    )
}
/*


*/


export default CodeManager;
