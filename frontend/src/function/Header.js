import { useNavigate } from "react-router-dom";
import {useEffect, useState} from "react";
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
                const response = await fetch("/user", requestOptions)
                    .then(res => res.json())
                    .then(data => setUser(data.name));
                if (response.status === 401) {
                    localStorage.removeItem('user');
                }
            } catch (error) {

                console.log(error)
                return;
            }
        }
        if (localStorage.getItem('user')) fetchData()


        // fetch("/user", requestOptions)
        //     .then(function(response) {
        //         if (response.status === 401) {
        //             // do what you need to do here
        //         }
        //     })
        //     .catch(function(error) {
        //         console.log('DO WHAT YOU WANT')
        //     });
    })

    async function logout() {
        localStorage.removeItem("user");
        navigate("/login");
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