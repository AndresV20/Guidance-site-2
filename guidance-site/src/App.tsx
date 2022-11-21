import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LangCsharp from "./pages/Csharp";
import NavBar from "./components/navBar";


export interface AppProps{};
const Application: React.FC<AppProps> = props => {
    return (
        <div>
            {/* <div><NavBar  /></div> */}
            <BrowserRouter>
                <NavBar  />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path = "/CSharp" element={<LangCsharp />}/>
            
                </Routes>
            </BrowserRouter>
       </div>
    )
};

export default Application;