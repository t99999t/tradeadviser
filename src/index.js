// @flow
import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// After
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AuthProvider} from "./context/AuthProvider";
import {StrictMode} from "react";

// Unlike with createRoot, you don't need a separate root.render() call here.
// This is because the root component will be rendered after hydration.
// If you want to render the root component before hydration,
// use root.componentDidMount() instead.
// root.render() will be called after hydration.
//const root = hydrateRoot(document.getElementById('root'), <Login tab="App" />);
// After
import {createRoot} from "react-dom/client";
import App from "./App";


const container = document.getElementById('root');
//createRoot(container!) if you use TypeScript
createRoot(container).render(//react 18 upgrade
    <StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/*" element={<App />}/>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    </StrictMode>
);

//
// // After
// import { hydrateRoot } from 'react-dom/client';
// const container = document.getElementById('root');
// //const root = hydrateRoot(container, <App tab="home" />);
// // Unlike with createRoot, you don't need a separate root.render() call here.
//
//
// hydrateRoot(container,<App tab={"home"}/>).render(//react 18 upgrade
//     <React.StrictMode>
//         <BrowserRouter>
//             <AuthProvider>
//                 <Routes>
//                     <Route path="/*" element={<App />}/>
//                 </Routes>
//             </AuthProvider>
//         </BrowserRouter>
//     </React.StrictMode>
// );
// /*
//  * Licensed to the Apache Software Foundation (ASF) under one
//  * or more contributor license agreements.  See the NOTICE file
//  * Helper methods
//  */