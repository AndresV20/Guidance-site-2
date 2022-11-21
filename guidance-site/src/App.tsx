import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Language from "./pages/Languages";
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
                    <Route path = "/languages" element={<Language />}/>
            
                </Routes>
            </BrowserRouter>
       </div>
    )
};

export default Application;