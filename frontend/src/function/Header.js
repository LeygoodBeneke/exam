import { useNavigate } from "react-router-dom";
import {useEffect, useState} from "react";
import '../style/Header.css';
import * as alertActions from "react-dom/test-utils";

function Header() {
    let navigate = useNavigate();
    const [user, setUser] = useState("");


    useEffect( () => {
        // if (localStorage.getItem('user') !== null)
        // fetch("/user", {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization': localStorage.getItem('user')
        //     },
        // })
        //     .then(res => res.json())
        //     .then(data => setUsername(data));

        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('user')
            },
        };
        //let response = new Response();
        //if (localStorage.getItem('user') !== null)
        // fetch("/user", requestOptions)
        //     .then(handleResponse)
        //     .catch(function(error) {});

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
            <a className="email" href="/nav">Мои товары</a>
            <a className="email" href="/test">Склады</a>
            <div className="email" >USERNAME: {user}</div>
            <button className="logout" onClick={logout}>Выйти</button>
        </header>
    );
}
export default Header;