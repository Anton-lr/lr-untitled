import {framesToTs, tsToFrames} from "./frameConversion"

const InputButton = ({state, setState, type}) => {
    //offset, duration, initialData, targetData
    
    const handleChange = event => {
        let v = event.target.value
        let vl = Array.from(v)
        if (vl[0] === "[" && vl[v.length - 1] === "]") {
            v = tsToFrames(JSON.parse(v))
        }   
        setState(v)
    };

    return (
        <input className="userInput"
            type="text"
            id={type}
            name={type}
            onChange={handleChange}
            value={state}
            />
    )
}

export default InputButton;