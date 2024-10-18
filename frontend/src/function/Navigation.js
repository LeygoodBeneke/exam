import React, {useCallback, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import UserSelect from "./UserSelect";
import PushButton from "./PushButton";
import TableRow from "./TableRow";

function Navigation() {
    let navigate = useNavigate();
    let isAuth = localStorage.getItem("user") === null;
    const [items, setItems] = useState([]);
    const [selectedUser, setSelectedUser] = useState();
    const [selectedItem, setSelectedItemId] = useState();

    let counter = 0;
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

    function handleClick() {
        alert('Товар успешно передан пользователю!');
    }
    const handleSelectedItemId = (event) => {
        if (event.target.value !== 'Выберете пользователя')
            setSelectedItemId(event.target.value);
        else
            setSelectedItemId('');
        console.log(event.target.value)
    };

    const deleteItem = () => {
        setItems(items.filter(item =>
            item.id !== selectedItem
        ))
        console.log(selectedItem, selectedUser);
    };


    return (
        <div>
            <Header/>
            <h1>Товары</h1>

            <table>
                <thead>
                <tr key={1231}>
                    <th></th>
                    <th>Название товара</th>
                    <th>Описание</th>
                    <th>Срок годности</th>
                </tr>
                </thead>
                <tbody>
                {
                    items.map((item) => {
                    counter++;
                    // <TableRow item={item} counter={counter} />
                    return (<TableRow key={counter} item={item} counter={counter}/>
                    )})
                }

                </tbody>
            </table>

            <h1>Передать товар</h1>
            <table>
                <thead>
                <tr key={1231}>
                    <th>Название товара</th>
                    <th>Имя пользователя</th>
                </tr>
                </thead>
                <tbody>
                    <tr key={1233}>
                        <td>
                            <select onChange={handleSelectedItemId}>
                                <option>Выберите название товара</option>
                                {
                                    items.map((item) => {
                                        return <option key={item.id} value={item.id}>{item.name}</option>
                                    })
                                }
                            </select>
                        </td>
                        <td>
                            <UserSelect onSelect={setSelectedUser}/>
                        </td>

                        <td>
                            <button onClick={deleteItem}>передать</button>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
}
export default Navigation;