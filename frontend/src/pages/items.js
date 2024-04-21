import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Item from "../Components/Item";
import Header from "../Components/Header";

function Items() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('/items')
            .then(response => response.json())
            .then(data => setItems(data))
    }, []);

    let navigate = useNavigate();
    const itemInfo = (itemId) =>{
        let path = `/items/` + itemId;
        navigate(path);
    }

    const toBasket = (itemId) => {

    }

    return (
        <div className="Items">
            <Item />
            {
                items.map((item) => {
                    return <div className="Item">
                        <div className="Card"></div>
                        <div> {item.name} </div>
                        {/*<i> {item.description} </i>*/}
                        <b> 123123 </b>
                        <div className="Button" onClick={() => itemInfo(item.id)}>подробнее</div>
                        <div className="Button" onClick={() => toBasket(item.id)}>В корзину</div>
                    </div>
                })
            }
        </div>
    );
}

export default Items;