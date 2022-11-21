import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";

export interface FrameReactProps{};
const FrameReact: React.FC<FrameReactProps> = props => {
    return (
        <div className="HomePage">
        <h1 className="LangHead">This is going to be the React page</h1>
        </div>
 
    )
};

export default FrameReact;