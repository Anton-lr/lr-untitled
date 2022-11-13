import {framesToTs, tsToFrames} from "./frameConversion"

const InputButton = ({state, setState, type}) => {
    //offset, duration, initialData, targetData
    
    const handleChange = event => {
        let v = event.target.value
        let vl = Array.from(v)
        if (vl[0] === "[" && vl[v.length - 1] === "]") {
            console.log("its a list")
            v = tsToFrames(JSON.parse(v))
        }   
        setState(v)
    };

    return (
        <input className="userInput"
            type="text"
            id={state}
            name={state}
            onChange={handleChange}
            value={state}
            />
    )
}

export default InputButton;