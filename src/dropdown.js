import Dropdown from 'react-bootstrap/Dropdown';

export const myDropdown = ( { setExpr }) => {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={() => setExpr("i / (d - 1)")}>linear</Dropdown.Item>
                <Dropdown.Item onClick={() => setExpr("1 - (1 - i / (d - 1))^ 2")}>exponential decrease </Dropdown.Item>
                <Dropdown.Item onClick={() => setExpr("(1 / (d - 1))^ 2")}>exponential increase </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}
