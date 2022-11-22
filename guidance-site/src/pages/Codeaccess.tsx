import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";

export interface OtherCodeAccessProps{};
const OtherCodeAccess: React.FC<OtherCodeAccessProps> = props => {
    return (
        <div className="HomePage">
        <h1 className="LangHead">This is going to be the Code accesibility page</h1>
        </div>
 
    )
};

export default OtherCodeAccess;