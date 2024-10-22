import React, {useState} from "react";

function PlaceCreate() {
    const [description, setDescription] = useState("")
    const [repair, setRepair] = useState("Home")
    const [work, setWork] = useState(false)

    const updateDescription = (event) => {
        setDescription(event.target.value)
    }

    const updateRepair = (event) => {
        setRepair(event.target.value)
    }

    const updateWork = (event) => {
        setWork(event.target.value === 1)
        console.log(event.target.value === 1)
    }

    const createPlace = () => {
        let dto = {
            description: description,
            repair: repair,
            work: work
        };

        console.log(dto)

        fetch("/place", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dto)
        })
        alert("Склад усешно создан!")
    };

    return (
        <div className="screen-1">
            <h1>Создать Склад</h1>
            <div className="email">
                <label>Описание</label>
                <input value={description} onChange={updateDescription}/>
            </div>

            <div className="email">
                <label>Repair</label>
                <select onChange={updateRepair}>
                    <option key={1}>Home</option>
                    <option key={2}>Office</option>
                    <option key={3}>Washing</option>
                    <option key={4}>Repair</option>
                </select>
            </div>

            <div className="email">
                <label>в работе?</label>
                <select onChange={updateWork}>
                    <option key={1} value={1}>да</option>
                    <option key={2} value={0}>нет</option>
                </select>
            </div>

            <button className="login" onClick={createPlace}>Создать</button>
        </div>
    );
}

export default PlaceCreate;