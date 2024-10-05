import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Items from "./pages/items";
import Places from "./pages/Places";
import Navigation from "./function/Navigation"
import Login from "./function/Login";

const router = createBrowserRouter([
    {
        path: "/items",
        element: <Items />,
    },
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/test",
        element: <Places />,
    },

    {
        path: "/nav",
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
