import {useParams} from "react-router-dom";

import {useState} from "react";

function Item() {

    const [item, setItem] = useState([]);
    let { itemId } = useParams();

    fetch('/items/' + itemId)
        .then(response => response.json())
        .then(data => setItem(data))

    return (
        <div>
            {item.id}
            {item.name}
            {item.description}
            <input type="text"></input>
        </div>
    );
}

export default Item;