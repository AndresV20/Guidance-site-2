import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";

export interface LangCSharpProps{};
const LangCsharp: React.FC<LangCSharpProps> = props => {
    return (
        <div className="HomePage">
        <h1 className="LangHead">This is going to be the C# page</h1>
        </div>
 
    )
};

export default LangCsharp;