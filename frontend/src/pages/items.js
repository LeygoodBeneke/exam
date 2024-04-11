import {useEffect, useState} from "react";

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
                    return <div>{item.id} {item.name} {item.description}</div>
                })
            }
        </div>
    );
}

export default Items;