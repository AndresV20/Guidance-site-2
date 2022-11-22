import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";

export interface OtherVpProps{};
const OtherVP: React.FC<OtherVpProps> = props => {
    return (
        <div className="HomePage">
        <h1 className="LangHead">This is going to be the VitePress page</h1>
        </div>
 
    )
};

export default OtherVP;