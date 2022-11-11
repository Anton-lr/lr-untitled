import './App.css';
import { useState } from 'react'
import FileUploadPage from './FileUploadPage';
import CodeViewer from './CodeViewer';
import CodeEditor from './CodeEditor';
import CodeAssembly from './CodeManager';
import Navbar from "./Navbar";

function App() {

  const [current, setCurrent] = useState("TimeRemapper")

  return (
    <div className="App">
      <header className="header">
        <Navbar setCurrent= {setCurrent}></Navbar>
      </header>
      <header className="header">{current}</header>
      <CodeViewer current={current}></CodeViewer>
    </div>
  );
}

export default App;
