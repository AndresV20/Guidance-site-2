import React from "react";
import { Link } from "react-router-dom";
import './components.css'

const NavBar = () => {
    return(
        <div className="NavBar">
            <li className="menu">
                <Link to="/">Home</Link>
            </li>
            <li className="menu">
                <Link to="/Csharp">C#</Link>
            </li>
            <li className="menu">
                <Link to="/Go">Go</Link>
            </li>
            <li className="menu">
                <Link to="/Typescript">Typescript</Link>
            </li>
            <li className="menu">
                <Link to="/Dart">Dart</Link>
            </li>
            <li className="menu">
                <Link to="/HtmlCss">HTML & CSS</Link>
            </li>
            <li>
                <Link to="/React">React</Link>
            </li>
            <li>
                <Link to="/Flutter">Flutter</Link>
            </li>
            <li>
                <Link to="/TailwindCss">Tailwind CSS</Link>
            </li>
        </div>
    );
}

export default NavBar;