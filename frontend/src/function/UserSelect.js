import React, {useEffect, useState} from "react";

function UserSelect({onSelect}) {

    const [userList, setUserList] = useState([]);

    useEffect(() => {
        if (localStorage.getItem('user') !== null) {
            try {
                fetch("/user/list", {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': localStorage.getItem('user')
                    }
                })
                    .then(data => data.json())
                    .then(data => setUserList(data))
                    .then(() => onSelect(userList.at(0)));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
            onSelect(userList.at(0))
        }
    }, [onSelect, userList]);

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