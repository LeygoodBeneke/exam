import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Places from "./function/Place/Places";
import Navigation from "./function/Navigation"
import Login from "./function/Login";

const router = createBrowserRouter([
    {
        path: "/places",
        element: <Places />,
    },

    {
        path: "/",
        element: <Navigation />,
    },
    {
        path: "/login",
        element: <Login />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
