
const Navbar = ({setCurrent}) => {
    return (
        <div className = "Navbar">
            <button onClick={() => setCurrent("TimeRemapper")}>TimeRemapper</button>
            <button onClick={() => setCurrent("BoundsPanner")}>BoundsPanner</button>
            <button onClick={() => setCurrent("Zoomer")}>Zoomer</button>
            <button onClick={() => setCurrent("Focuser")}>Focuser</button>
        </div>
    );
}

export default Navbar;