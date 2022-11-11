import { useState, useEffect } from 'react';
import CodeEditor from './CodeEditor';
import { framesToTs, framesToTsString , printTs } from "./frameConversion";
import { combineLists } from './functions';
import Printer from './Printer';


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

    }, [keyframes, values])


    function save() {
        const a = combineLists(keyframes, values)
        console.log(a)
        setCode(a)
    }

    function myPrint(list, type = "v") {
        const vals = []
        for (var i = 0; i < list.length; i++) {
            let d = list[i]
            if (type == "keyframes") {
                d = printTs(list[i])
            }
            if (type == "code") {
                d = "[" + printTs(list[i][0]) + ", " + list[i][1] + "]"
            }
            vals.push(
                <div className="vitem" id={i}>
                    
                    {d}
                </div>)
        }
        return vals
    }
    //<button className="deleteBelow" i={i} onClick={() => db(code, i)}> delete below </button>
    //<button className="removeElement" i={i} onClick={() => ri(code, i)}> remove element </button>

    function db(list, i) {
   
        const dd = code.slice(0, i)
        console.log("DELETED ??? ", i)
   
        setCode(dd)
    }

    function ri(list, i) {
        const ed = list.slice(0, i).concat(list.slice(i + 1, list.length))
        setCode(ed)
    }


    return (
        <div className="testicles">
  
            <div className="codeSection">
                                                <div className="manager">Keyframes  <CodeEditor type="keyframes" data={keyframes} addData={setKeyframes} deleteData={() => setKeyframes([])} /> <p className="display">{myPrint(keyframes, "keyframes")}</p></div>
                {name !== "BoundsPanner" &&     <div className="manager">Values     <CodeEditor type="values" data={values} addData={setValues} deleteData={() => setValues([])} /> <p className="display">{myPrint(values)}</p></div>}
                {name === "BoundsPanner" && <div className="manager">Width      <CodeEditor type="width" addData={setWidth} deleteData={() => setWidth([])} /><p className="display"> {width}</p></div>}
                {name === "BoundsPanner" && <div className="manager">Height     <CodeEditor type="height" addData={setHeight} deleteData={() => setHeight([])} /><p className="display"> {height}</p></div>}
                {name === "BoundsPanner" && <div className="manager">X          <CodeEditor type="x" addData={setX} deleteData={() => setX([])} /><p className="display"> {x}</p></div>}
                {name === "BoundsPanner" && <div className="manager">Y          <CodeEditor type="y" addData={setY} deleteData={() => setY([])} /><p className="display"> {y}</p></div>}
                <div className="manager">
                    Current code

                    <button className="save" onClick={() => save(keyframes, values)}>save</button>
                    <button className="delete" onClick={() => setCode([])}>delete</button>
                    <p className="display"> {myPrint(code, "code")}</p>
       
                </div>
                
         
            </div>

        </div>
    )
}
export default CodeManager;