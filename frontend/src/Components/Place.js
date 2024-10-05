import { Component } from "react";

class Place extends Component{

    render() {
        return <div className="Place">
            <div> ID: {this.props.place.id} </div>
            <div> DESCR: {this.props.place.description} </div>
            <div> REPAIR: {this.props.place.repair} </div>
            <div> WORK: {this.props.place.work} </div>
        </div>
    }
}

export default Place;