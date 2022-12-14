import { useState } from 'react';
import CodeManager from './CodeManager';

const CodeViewer = ({ current }) => {

    const [TimeRemapper, setTimeRemapper] = useState([])
    const [Focuser, setFocuser] = useState([])
    const [BoundsPanner, setBoundsPanner] = useState([])
    const [Zoomer, setZoomer] = useState([])

    return (
        <div>
            <div>
                {current === "Zoomer" && <CodeManager name="Zoomer" setCode={setZoomer} code={Zoomer} />}
                {current === "Focuser" && <CodeManager name="Focuser" setCode={setFocuser} code={Focuser} />}
                {current === "TimeRemapper"  && <CodeManager name="TimeRemapper" setCode={setTimeRemapper} code={TimeRemapper} />}
                {current === "BoundsPanner"  && <CodeManager name="BoundsPanner" setCode={setBoundsPanner} code={BoundsPanner} />}
            </div>
        </div>
    )
}

export default CodeViewer;
