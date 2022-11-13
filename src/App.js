import './App.css';
import { useState } from 'react'
import FileUploadPage from './FileUploadPage';
import CodeViewer from './CodeViewer';
import CodeEditor from './CodeEditor';
import CodeAssembly from './CodeManager';
import Navbar from "./Navbar";

function App() {

  const [current, setCurrent] = useState("")

  return (
    <div className="App">
      <a href="https://github.com/Anton-lr/lr-untitled/issues">report an issue</a>
      <header className="header">
        <Navbar setCurrent= {setCurrent}></Navbar>
      </header>

      <header className="header">{current}</header>

      <CodeViewer current={current}></CodeViewer>
    </div>
  );
}

export default App;
