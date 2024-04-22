import {Component, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

import Item from "../Components/Item";
import Header from "../Components/Header";

class Items extends Component{

    // const [items, setItems] = useState([]);
    //
    // useEffect(() => {
    //     fetch('/items')
    //         .then(response => response.json())
    //         .then(data => setItems(data))
    // }, []);

    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        try {
            const response = await fetch('/items');
            const jsonData = await response.json();
            this.setState({ items: jsonData });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // const toBasket = (itemId) => {
    //
    // }
    render() {
        return (
            <div className="Items">
                {
                    this.state.items.map((it) => {
                        return <Item key={it.id} item={it} onAdd={this.props.onAdd} />
                    })
                }
            </div>
        );
    }
}

export default Items;