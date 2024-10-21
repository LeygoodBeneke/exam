import React, {useState} from "react";

function ThingCreate({places}) {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [warranty, setWarranty] = useState("")
    const [placeId, setPlaceId] = useState("")


    const updateName = (event) => {
        setName(event.target.value)
    }

    const updateDescription = (event) => {
        setDescription(event.target.value)
    }

    const updateWarranty = (event) => {
        setWarranty(event.target.value)
    }

    const updatePlaceId = (event) => {
        setPlaceId(event.target.value)
    }

    const createItem = () => {
        let dto = {
            name: name,
            description: description,
            warranty: warranty,
            placeId: placeId
        };

        console.log(dto)

        fetch("/thing", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('user')
            },
            body: JSON.stringify(dto)
        })
        alert("Товар усешно создан!")
    };

    return (
        <div className="screen-1">
            <h1>Создать товар</h1>
            <div className="email">
                <label>название</label>
                <input value={name} onChange={updateName}/>
            </div>

            <div className="email">
                <label>описание</label>
                <input value={description} onChange={updateDescription}/>
            </div>

            <div className="email">
                <label>гарантия</label>
                <input type="date" onChange={updateWarranty}/>
            </div>

            <div className="email">
                <label>место харанения</label>
                <select onChange={updatePlaceId}>
                    <option>Выберите название места хранения</option>
                    {
                        places.map((place) => {
                            return <option key={place.id} value={place.id}>{place.description}</option>
                        })
                    }
                </select>
            </div>


            <button className="login" onClick={createItem}>Создать</button>
        </div>
    );
}

export default ThingCreate;