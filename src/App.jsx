//import React from "react";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import LinkEmail from "./pages/LinkEmail"

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/LinkEmail" element={<LinkEmail/>}/>
            </Routes>
        </div>
    );
}

export default App;
