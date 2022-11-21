import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";

export interface LangHtmlCssProps{};
const LangHtmlCss: React.FC<LangHtmlCssProps> = props => {
    return (
        <div className="HomePage">
        <h1 className="LangHead">This is going to be the HTML & CSS page page</h1>
        </div>
 
    )
};

export default LangHtmlCss;