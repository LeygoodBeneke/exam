import React, {useState} from "react";

function ThingDelete({items}) {

    const [selectedItem, setSelectedItemId] = useState();

    const handleSelectedDeleteItemId = (event) => {
        if (event.target.value !== 'Выберите название товара')
            setSelectedItemId(event.target.value);
        else
            setSelectedItemId('');

        console.log(selectedItem)
    };

    const deleteItem = () => {
        fetch("/thing/" + selectedItem, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('user')
            },
        })
        alert("Товар усешно удалён!")
    };

    return (
        <div className="screen-1">
            <h1>Удалить товар</h1>

            <div>Товар</div>
            <select onChange={handleSelectedDeleteItemId}>
                <option>Выберите название товара</option>
                {
                    items.map((item) => {
                        return <option key={item.id} value={item.id}>{item.name}</option>
                    })
                }
            </select>
            <p/>
            <button className="login" onClick={deleteItem}>Удалить</button>
        </div>
    );
}

export default ThingDelete;