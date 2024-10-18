import React, {useEffect, useState} from "react";

function UserSelect({onSelect}) {

    const [userList, setUserList] = useState([]);

    useEffect(() => {
        if (localStorage.getItem('user') !== null) {
            fetchData()
            onSelect(userList.at(0))
        }
    }, []);

    async function fetchData() {
        try {
            const response = await fetch("/user/list", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('user')
                }
            });
            const data = await response.json();
            setUserList(data);
            onSelect(userList.at(0))
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const handleChange = (event) => {
        if (event.target.value !== 'Выберете пользователя')
            onSelect(event.target.value);
        else
            onSelect('');
    };


    return (
        <select id="ddlViewBy" onChange={handleChange}>
            <option key={0}>Выберете пользователя</option>
            {
                userList.map((user) => {
                    return <option key={user.id}>{user.username}</option>
                    }
                )
            }
        </select>
    );
}

export default UserSelect;