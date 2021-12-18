import React from 'react'
import s from './App.module.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";

function App() {
    return (
        <div className={s.App}>
            <Header/>
            <Main/>
            <Skills/>
        </div>
    );
}

export default App;
