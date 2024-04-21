import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Items from "./pages/items";
import Item from "./pages/Item";

const router = createBrowserRouter([
    {
        path: "/items",
        element: <Items />,
    },
    {
        path: "/items/:itemId",
        element: <Item />,
    },
    {
        path: "/",
        element: <App />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
