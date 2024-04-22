import './App.css';
import Items from "../pages/items";
import Header from "../Components/Header";
import {Component} from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            items: []
        }
        this.addToOrder = this.addToOrder.bind(this)
    }


    render() {
        return (
            <div className="App">
                <div className="Wrapper">
                    <Header orders={this.state.orders}/>
                    <Items onAdd={this.addToOrder}/>
                </div>
            </div>
        );
    }

    addToOrder(item) {
        this.setState({orders: [...this.state.orders, item]}, () => {
            console.log(this.state.orders)
        })

    }
}

export default App;
