import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LangCsharp from "./pages/Csharp";
import LangGo from "./pages/Go";
import LangHtmlCss from "./pages/Html-Css";
import LangTS from "./pages/Typescript";
import LangDart from "./pages/Dart";
import NavBar from "./components/navBar";
import FrameReact from "./pages/React";
import FrameFlutter from "./pages/Flutter";
import FrameCssTailwind from "./pages/TailwindCss";


export interface AppProps{};
const Application: React.FC<AppProps> = props => {
    return (
        <div>
            <BrowserRouter>
                <NavBar  />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path = "/CSharp" element={<LangCsharp />}/>
                    <Route path = "/Go" element={<LangGo />}/>
                    <Route path = "/Typescript" element={<LangTS />}/>
                    <Route path = "/CSharp" element={<LangHtmlCss />}/>
                    <Route path = "/Dart" element={<LangDart />}/>
                    <Route path = "/React" element={<FrameReact />}/>
                    <Route path = "/Flutter" element={<FrameFlutter />}/>\
                    <Route path = "/TailwindCss" element={<FrameCssTailwind />}/>
                </Routes>
            </BrowserRouter>
       </div>
    )
};

export default Application;