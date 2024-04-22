import { Component } from "react";

class Order extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Order">
                <span className="Card"></span>
                <span> {this.props.item.id} </span>
                <span> <b> {this.props.item.name}</b> </span>
                <span> {this.props.item.description} </span>
                <input className="Count" type="number" defaultValue="1" min="1" max="100"/>
            </div>
        )
    }
}

export default Order;