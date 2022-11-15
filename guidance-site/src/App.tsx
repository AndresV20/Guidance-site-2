import React from 'react';
import Menu from "./Components/Input"
import './App.css';
import "./Components/styles.css"

const App : React.FC = () => {
  return (
    <div className="App">
      <span className='heading'>DataGrove Guidance Site</span>
      <Menu />

    </div>
  );
}

export default App;