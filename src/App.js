import './App.css';
import Main from "./components/Main";
import Poets from "./components/Poets";
import FaalHafez from "./components/FaalHafez";
import Poet from "./components/Poet";

import {Route, Routes} from "react-router-dom";
import Search from "./components/Search";
import Poem from "./components/Poem";


function App() {
    return (
        <>
            <Routes>
                <Route path="/faalHafez" element={<FaalHafez/>}/>
                <Route path="/poets" element={<Poets/>}/>
                <Route path="/poet/:poetId" element={<Poet/>}/>
                <Route path="/poem/:poemId" element={<Poem/>}/>
                <Route path="/search" element={<Search/>}/>
                <Route exact path="/" element={<Main/>}/>
            </Routes>
        </>

    );
}

export default App;
