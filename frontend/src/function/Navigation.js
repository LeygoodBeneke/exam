import React, {useCallback, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import UserSelect from "./UserSelect";
import PushButton from "./PushButton";
import TableRow from "./TableRow";
import ThingDelete from "./Thing/ThingDelete";
import item from "../Components/Item";
import ThingCreate from "./Thing/ThingCreate";
import '../style/Table.css'

function Navigation() {
    let navigate = useNavigate();
    let isAuth = localStorage.getItem("user") === null;
    const [items, setItems] = useState([]);
    const [selectedUser, setSelectedUser] = useState();
    const [selectedItem, setSelectedItemId] = useState();
    const [places, setPlaces] = useState([]);
    const [changedItem, setChangedItem] = useState({})

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

    const changeItem = () => {


        console.log(selectedItem, selectedUser);
    };

    const updateName = (value) => {
        changedItem.name = value
    }

    const updateDescription = (value) => {
        changedItem.description = value
    }

    const updateWarranty = (event) => {
        changedItem.warranty = event.target.value
    }

    const updatePlaceId = (event) => {
        changedItem.placeId = event.target.value
    }

    const updateItem = () => {
        console.log(changedItem)

        fetch("/thing", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('user')
            },
            body: JSON.stringify(changedItem)
        });
        alert("Товар успешно изменён!")
    }

    const handleChangedItemId = (event) => {
        if (event.target.value !== 'Выберете название товара')
            changedItem.id = event.target.value;
        else
            setSelectedItemId('');
    };


    return (
        <div>
            <Header/>
            <div className="screen-1">
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
            </div>


            <div className="screen-1">
                <h1>Передать товар</h1>

                <div className="email">
                    <label>Название товара</label>
                    <select onChange={handleSelectedItemId}>
                        <option>Выберите название товара</option>
                        {
                            items.map((item) => {
                                return <option key={item.id} value={item.id}>{item.name}</option>
                            })
                        }
                    </select>
                </div>

                <div className="email">
                    <label>Имя пользователя</label>
                    <UserSelect onSelect={setSelectedUser}/>
                </div>
                <button  className="login" onClick={deleteItem}>передать</button>

            </div>



            <ThingCreate places={places}/>

            <div className="screen-1">
                <h1>Изменить товар</h1>


                <div className="email">
                    <label>Выберете товар для изменения</label>
                    <select onChange={handleChangedItemId}>
                        <option>Выберите название товара</option>
                        {
                            items.map((item) => {
                                return <option key={item.id} value={item.id}>{item.name}</option>
                            })
                        }
                    </select>
                </div>

                <div className="email">
                    <label>новое название</label>
                    <input value={changedItem.name}
                           onChange={e => updateName(e.target.value)}/>
                </div>

                <div className="email">
                    <label>новое описание</label>
                    <input value={changedItem.description}
                           onChange={e => updateDescription(e.target.value)}/>
                </div>

                <div className="email">
                    <label>новая гарантия</label>
                    <input type="date"  onChange={updateWarranty}/>
                </div>

                <div className="email">
                    <label>новое место харанения</label>
                    <select onChange={updatePlaceId}>
                        <option>Выберите название места хранения</option>
                        {
                            places.map((place) => {
                                return <option key={place.id} value={place.id}>{place.description}</option>
                            })
                        }
                    </select>
                </div>
                <button className="login" onClick={updateItem}>Изменить</button>
            </div>


            <ThingDelete items={items}/>
        </div>
    );
}
export default Navigation;