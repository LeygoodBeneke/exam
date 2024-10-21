import { Component } from "react";

class Place extends Component{

    render() {
        return <div className="screen-1">
            <div className="email">
                <label>Идентификатор</label>
                <div>{this.props.place.id} </div>
            </div>

            <div className="email">
                <label>Описание</label>
                <div> DESCR: {this.props.place.description} </div>
            </div>

            <div className="email">
                <label>Флаг специального места пребывания</label>
                <div>{this.props.place.repair}</div>
            </div>

            <div className="email">
                <label>В работе</label>
                <div>{this.props.place.work}</div>
            </div>

            <h2>Товары</h2>
        </div>
    }
}

export default Place;