import { Component } from "react";

class Item extends Component{

    render() {
        return <div className="Item">
            <div className="Card"></div>
            <div> {this.props.item.id} </div>
            <div> {this.props.item.name} </div>
            {/*<i> {item.description} </i>*/}
            <b> {this.props.item.description} </b>
            <div className="Button">подробнее</div>
            <div className="Button" onClick={() => this.props.onAdd(this.props.item)}>В корзину</div>
        </div>
    }
}

export default Item;