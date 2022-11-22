import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";

export interface OtherDebugProps{};
const OtherDebug: React.FC<OtherDebugProps> = props => {
    return (
        <div className="HomePage">
        <h1 className="LangHead">This is going to be the debugging page</h1>
        </div>
 
    )
};

export default OtherDebug;