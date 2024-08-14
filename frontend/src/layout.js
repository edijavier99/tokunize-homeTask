import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { Dashboard } from "./views/dashboard";

const Layout = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route element={<App/>} path="/" />
                    <Route element={<Dashboard/>} path="/dashboard" />
                    <Route element={<h1>Not found!</h1>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Layout;