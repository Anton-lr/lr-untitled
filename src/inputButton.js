const InputButton = ({state, setState}) => {
    //offset, duration, initialData, targetData
 
    const handleChange = event => {
        let v = event.target.value
        let va = JSON.parse(v)
        console.log(v)
        console.log(va)
        setState(event.target.value)
    };

    return (
        <input
            type="text"
            id={state}
            name={state}
            onChange={handleChange}
            value={state}
            />
    )
}

export default InputButton;