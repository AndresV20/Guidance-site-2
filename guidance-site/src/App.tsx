import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Language from "./pages/Languages";

export interface AppProps{};
const Application: React.FC<AppProps> = props => {
    return (
       <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path = "languages" element={<Language />}/>
        </Routes>
       </BrowserRouter>
    )
};

export default Application;