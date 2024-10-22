import React, {useState} from "react";

function PlaceDelete({places}) {
    const [selectedPlaceId, setSelectedPlaceId] = useState("")

    const deletePlace = () => {

        fetch("/place/" + selectedPlaceId, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        alert("Склад усешно изменен!")
    };

    const handleSelectedPlaceId = (event) => {
        if (event.target.value !== 'Выберете пользователя')
            setSelectedPlaceId(event.target.value);
        else
            setSelectedPlaceId('');
        console.log(event.target.value)
    };

    return (
        <div className="screen-1">
            <h1>Удалить Склад</h1>

            <div className="email">
                <label>Старое описание</label>
                <select onChange={handleSelectedPlaceId}>
                    <option>Выберите название товара</option>
                    {
                        places.map((place) => {
                            return <option key={place.id} value={place.id}>{place.description}</option>
                        })
                    }
                </select>
            </div>


            <button className="login" onClick={deletePlace}>Удалить</button>
        </div>
    );
}

export default PlaceDelete;