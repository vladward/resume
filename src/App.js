import s from './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";

function App() {
    return (
        <div className={s.App}>
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
        </div>
    );
}

export default App;
