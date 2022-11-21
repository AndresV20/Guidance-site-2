import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";

export interface FrameFlutterProps{};
const FrameFlutter: React.FC<FrameFlutterProps> = props => {
    return (
        <div className="HomePage">
        <h1 className="LangHead">This is going to be the Flutter page</h1>
        </div>
 
    )
};

export default FrameFlutter;