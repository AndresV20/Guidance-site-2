import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";

export interface LangPageProps{};
const Language: React.FC<LangPageProps> = props => {
    return (
        <div className="HomePage">
        <h1 className="LangHead">This is going to be a languages page</h1>
        <div className="contents">
        </div>
        <ul>
        <li>C#</li>
        <li>Go</li>
        <li>Typescript</li>
        <li>HTML & CSS</li>
        <li>Dart</li>
        </ul>
        </div>
 
    )
};

export default Language;