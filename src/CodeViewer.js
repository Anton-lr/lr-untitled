import { useState } from 'react';
import CodeEditor from './CodeEditor';
import CodeManager from './CodeManager';

const CodeViewer = ({ current }) => {

    const [TimeRemapper, setTimeRemapper] = useState([])
    const [Focuser, setFocuser] = useState([])
    const [BoundsPanner, setBoundsPanner] = useState([])
    const [Zoomer, setZoomer] = useState([])

    return (
        <div>

            <div>
                {current == "TimeRemapper"  && <CodeManager name="TimeRemapper" setCode={setTimeRemapper} code={TimeRemapper} />}
                {current == "Focuser"       && <CodeManager name="Focuser" setCode={setFocuser} code={Focuser} />}
                {current == "BoundsPanner"  && <CodeManager name="BoundsPanner" setCode={setBoundsPanner} code={BoundsPanner} />}
                {current == "Zoomer"        && <CodeManager name="Zoomer" setCode={setZoomer} code={Zoomer} />}
            </div>
            
        </div>
    )
}

export default CodeViewer;
