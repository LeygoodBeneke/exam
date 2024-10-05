import { useNavigate } from "react-router-dom";
import {useEffect, useState} from "react";

function Header() {
    let navigate = useNavigate();
    const [user, setUser] = useState("");


    useEffect(  () => {
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
        fetch("/user", requestOptions)
            .then(res => res.json())
            .then(data => setUser(data.name));
        console.log(user)
    })

    async function logout() {
        localStorage.removeItem("user");
        navigate("/");
    }

    return (
        <div className="Header">
            <a href="/nav">Мои товары</a>
            <a href="/test">Склады</a>
            <div>USERNAME: {user}</div>
            <button onClick={logout}>Выйти</button>
        </div>
    );
}
export default Header;