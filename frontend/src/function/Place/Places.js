import {Component} from "react";

import Place from "./Place";
import Header from "../Header";
import ThingInfo from "../Thing/ThingInfo";
import PlaceCreate from "./PlaceCreate";
import PlaceUpdate from "./PlaceUpdate";
import PlaceDelete from "./PlaceDelete";

class Places extends Component{


    constructor(props) {
        super(props);
        this.state = {
            items: [],
            logData: [],
            login: {
                token: "",
                tokenType: ""
            }
        }
    }

    componentDidMount() {
        this.fetchData();
        this.fetchData1();
    }

    fetchData = async () => {
        try {
            const response = await fetch('/place');
            const jsonData = await response.json();
            this.setState({ items: jsonData });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData1 = async () => {
        try {

            if (localStorage.getItem("user") !== null) {
                const headers = { 'Authorization': localStorage.getItem("user") };
                const response = await fetch('/thing', {headers});
                const jsonData = await response.json();
                this.setState({ logData: jsonData });
                console.log(jsonData);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    render() {
        return (
            <div>
                <Header />
                <ThingInfo item={"we"}/>
                <h1>Склады</h1>
                {
                    this.state.items.map((it) => {
                        return <Place key={it.id} place={it} onAdd={this.props.onAdd} />
                    })
                }
                <PlaceCreate />
                <PlaceUpdate places={this.state.items}/>
                <PlaceDelete places={this.state.items}/>
            </div>
        );
    }
}

export default Places;