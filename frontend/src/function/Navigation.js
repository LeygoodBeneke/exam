import React, {useCallback, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import UserSelect from "./UserSelect";
import PushButton from "./PushButton";
import TableRow from "./TableRow";
import ThingDelete from "./Thing/ThingDelete";
import item from "../Components/Item";
import ThingCreate from "./Thing/ThingCreate";

function Navigation() {
    let navigate = useNavigate();
    let isAuth = localStorage.getItem("user") === null;
    const [items, setItems] = useState([]);
    const [selectedUser, setSelectedUser] = useState();
    const [selectedItem, setSelectedItemId] = useState();
    const [places, setPlaces] = useState([]);
    let counter = 0;
    useEffect(() => {
        if (!isAuth) {
            fetch("/thing", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('user')
                },
            })
                .then(res => res.json())
                .then(data => setItems(data));

            fetch("/place", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then(res => res.json())
                .then(data => setPlaces(data));



        }
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
        let dto = {};
        dto.thinkId = selectedItem
        dto.username = selectedUser


        fetch("/thing/give", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('user')
            },
            body: JSON.stringify(dto)
        });
        console.log(selectedItem, selectedUser);
    };


    return (
        <div>
            <Header/>
            <h1>Мои товары</h1>
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

            <hr/>

            <ThingCreate places={places}/>

            <hr/>

            <h1>Изменить товар</h1>
            <div>Выберете товар для изменения</div>
            <select>
                <option>Выберите название товара</option>
                {
                    items.map((item) => {
                        return <option key={item.id} value={item.id}>{item.name}</option>
                    })
                }
            </select>

            <div>новое название</div>
            <input/>
            <div>новое описание</div>
            <input/>
            <div>новая гарантия</div>
            <input type="date"/>
            <div>новое место харанения</div>
            <select>
                <option>Выберите название места хранения</option>
                {
                    places.map((place) => {
                        return <option key={place.id} value={place.id}>{place.description}</option>
                    })
                }
            </select>
            <p/>
            <button onClick={() => alert("Товар успешно изменён!")}>Изменить</button>

            <hr/>

            <ThingDelete items={items}/>
        </div>
    );
}
export default Navigation;