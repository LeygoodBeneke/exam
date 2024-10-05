import React, {useCallback, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function Navigation() {
    let navigate = useNavigate();
    let isAuth = localStorage.getItem("user") === null;
    let data = []
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("/thing", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('user')
            },
        })
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);

    const routeChange = useCallback(() => {
        navigate(`/login`);
    }, [navigate]);

    async function logout() {
        localStorage.removeItem("user");
        navigate("/");
    }

    const getThings = useCallback(async () => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('user')
            },
        };
        const response = await fetch("/thing", requestOptions)
        data = await response.json();

        return data;
    }, [])

    useEffect(() => {
        if (isAuth) routeChange();
        if (!isAuth) data = getThings();
    }, [isAuth, routeChange, getThings]);

    return (
        <div>
            <Header/>
            <h1>Товары</h1>

            <table>
                <thead>
                <tr>
                    <th>№</th>
                    <th>Название товара</th>
                    <th>Описание</th>
                    <th>Срок годности</th>
                </tr>
                </thead>
                <tbody>

                {items.map((row) => {
                    return (
                        <tr key={row.id}>
                             <td>{row.id}</td>
                        </tr>
                    )
                })}

                </tbody>
                {/*<tr>*/}
                {/*    <td>1</td>*/}
                {/*    <td>Maria Anders</td>*/}
                {/*    <td>Maria Anders</td>*/}
                {/*    <td>Maria Anders</td>*/}
                {/*    <td>Germany</td>*/}
                {/*    <td>Maria Anders</td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*    <td>2</td>*/}
                {/*    <td>Francisco Chang</td>*/}
                {/*    <td>Mexico</td>*/}
                {/*</tr>*/}
            </table>
            <button onClick={getThings}>asdas</button>
        </div>
    );
}
export default Navigation;