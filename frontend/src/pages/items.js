import {useEffect, useState} from "react";
import "./items.css"

function Items() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('/items')
            .then(response => response.json())
            .then(data => setItems(data))
    }, []);

    return (
            <div className="Items">
                {
                    items.map((item) => {
                        return <div className="Item">
                            <div> {item.id} </div>
                            <div> {item.name} </div>
                            <div> {item.description} </div>
                        </div>
                    })
                }
            </div>
    );
}

export default Items;