import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import "./style.css";

export interface HomePageProps{};
const Home: React.FC<HomePageProps> = props => {
    return (
      <div>
      <h1 className="HomeHead">This is going to be the home page</h1>
      <div>
      <ul>
      <li>C#</li>
      <li>Go</li>
      <li>Typescript</li>
      <li>HTML & CSS</li>
      <li>Dart</li>
      </ul>
      <ul>
      <li>React</li>
      <li>Flutter</li>
      <li>Tailwind CSS</li>
      </ul>
      <ul>
      <li>Debugging</li>
      <li>Code Accessibility</li>
      </ul>
      </div>
      </div>
    )
};

export default Home;