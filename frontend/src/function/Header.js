import { useNavigate } from "react-router-dom";
import {useEffect, useState} from "react";
import '../style/Header.css';
import * as alertActions from "react-dom/test-utils";

function Header() {
    let navigate = useNavigate();
    const [user, setUser] = useState("");


    useEffect( () => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('user')
            },
        };

        const fetchData = async () => {
            try {
                await fetch("/user", requestOptions)
                    .then(res => res.json())
                    .then(data => setUser(data.name));
            } catch (error) {

                console.log(error)
                return;
            }
        }
        if (localStorage.getItem('user')) fetchData()
    })

    async function logout() {
        localStorage.removeItem("user");
        navigate("/login");
    }

    return (
        <header className="screen-2">
            <a className="email" href="/">Мои товары</a>
            <a className="email" href="/places">Склады</a>
            <div className="email" >Login: {user}</div>
            <button className="logout" onClick={logout}>Выйти</button>
        </header>
    );
}
export default Header;