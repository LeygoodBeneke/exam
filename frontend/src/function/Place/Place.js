import {useEffect, useState} from "react";
import "../../style/Thing.css"

function Place({place}) {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("/place/" + place.id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => setItems(data));
        }
    , [place]);


    return (
        <div className="screen-1">
        <div className="email">
            <label>Идентификатор</label>
            <div>{place.id} </div>
        </div>

        <div className="email">
            <label>Описание</label>
            <div>{place.description} </div>
        </div>

        <div className="email">
            <label>Флаг специального места пребывания</label>
            <div>{place.repair}</div>
        </div>

        <div className="email">
            <label>В работе</label>
            <div>{place.work === true ? "YES" : "NO"}</div>
        </div>

        <h2>Товары</h2>
        <div className="things">
            {
                items.map((item) => {
                    return (<div className="thing">{item.name}</div>);
                })
            }
        </div>
    </div>
    );
}

export default Place;