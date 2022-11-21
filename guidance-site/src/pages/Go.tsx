import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";

export interface LangGoProps{};
const LangGo: React.FC<LangGoProps> = props => {
    return (
        <div className="HomePage">
        <h1 className="LangHead">This is going to be the Go page</h1>
        </div>
 
    )
};

export default LangGo;