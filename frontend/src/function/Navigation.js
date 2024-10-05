import React, {useCallback, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function Navigation() {
    let navigate = useNavigate();
    let isAuth = localStorage.getItem("user") === null;
    const [items, setItems] = useState([]);

    useEffect(() => {
        if (!isAuth)
            fetch("/thing", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('user')
            },
        })
            .then(res => res.json())
            .then(data => setItems(data));
    }, [isAuth]);

    const routeChange = useCallback(() => {
        navigate(`/login`);
    }, [navigate]);

    useEffect(() => {
        if (isAuth) routeChange();
    }, [isAuth, routeChange]);

    return (
        <div>
            <Header/>
            <h1>Товары</h1>

            <table>
                <thead>
                <tr>
                    <th>Серийный номер</th>
                    <th>Название товара</th>
                    <th>Описание</th>
                    <th>Срок годности</th>
                </tr>
                </thead>
                <tbody>

                {items.map((item) => {
                    return (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>{item.warranty}</td>
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
        </div>
    );
}
export default Navigation;