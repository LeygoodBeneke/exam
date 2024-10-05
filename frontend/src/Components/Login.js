import {Component} from "react";
import {Navigate } from "react-router-dom";


class Login extends Component{

    constructor(props) {
        super(props)
        this.state = {
            login: "",
            password: ""
        }
        this.login = this.login.bind(this);

        this.paymentForm = <Navigate to="/login"/>;  //this
    }

    async login() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: this.state.login, password: this.state.password })
        };
        const response = await fetch("/api/auth/login", requestOptions)
        const data = await response.json();
        if (data.token !== null) localStorage.setItem("user", data.tokenType + data.token);

        console.log(localStorage.getItem("user"))

    }

    async logout() {
        localStorage.removeItem("user");
    }


    updatePassword(target) {
        this.setState({password : target.value});
    }

    updateLogin(target) {
        this.setState({login : target.value});
    }

    checkUserAuth() {
        return localStorage.getItem("user") !== null;
    }


    render() {

        return (
            <div>
                <input value={this.state.login} onChange={e => this.updateLogin(e.target)}/>
                <input value={this.state.password} onChange={e => this.updatePassword(e.target)}/>

                {
                    this.checkUserAuth() ? <button onClick={this.logout}>Выход</button> :
                        <button onClick={this.login}>Авторизация</button>
                }
                <button onClick={this.logout}>redirect</button>
                {/*{ this.checkUserAuth() ? this.paymentForm : null }*/}
            </div>
        );
    }
}

export default Login;