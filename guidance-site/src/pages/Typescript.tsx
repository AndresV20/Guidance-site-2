import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";

export interface LangTSProps{};
const LangTS: React.FC<LangTSProps> = props => {
    return (
        <div className="TSPage">
        <h1 className="LangTS">This is going to be the Typescript page</h1>
        </div>
 
    )
};

export default LangTS;