import React from 'react';
import Menu from "./Components/Input"
import './App.css';
import "./Components/styles.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/info1";
import Blogs from "./pages/Blog";//page 2
import Contact from "./pages/Contact";//page 3
import ReactDOM from 'react-dom';

const App : React.FC = () => {
  return (
    <div className="App">
      <span className='heading'>DataGrove Guidance Site</span>
      <Menu />
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Blog" element={<Blogs />} />
          <Route path="Contact" element={<Contact />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById("root"));
export default App;