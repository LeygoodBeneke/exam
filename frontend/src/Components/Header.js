import { Component } from "react";

class Header extends Component{
    render() {
        return <div className="Header">
            <ul className="nav">
                <li>Контакты</li>
                <li>О нас</li>
                <li>Кабинет</li>
            </ul>
            <div className="logo">The Market</div>
        </div>
    }
}

export default Header;