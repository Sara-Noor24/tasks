import React from "react";
import "./App.css";
import { Quizzer } from "./quizzer/Quizzer";
import { ShowHideTasks } from "./ShowHideTasks";
import Layout from "./Layout.png";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Sara Noor UD CISC275 with React Hooks and TypeScript
            </header>
            <Quizzer></Quizzer>
            <hr></hr>
            <img src={Layout} alt="Layout" />
            <ShowHideTasks></ShowHideTasks>
        </div>
    );
}

export default App;
