import {useState} from "react";
import {useNavigate} from "react-router-dom";

function Login() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    let data = {
        message: "hahah",
    };

    function updatePassword(target) {
        setPassword(target)
    }

    function updateLogin(target) {
        setLogin(target)
    }

    async function loginFunction() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: login, password: password })
        };
        const response = await fetch("/api/auth/login", requestOptions)
        data = await response.json();

        if (data.hasOwnProperty('token')) {
            localStorage.setItem("user", data.tokenType + data.token);
            navigate('/test');
        } else {
            document.querySelector('.test').style.visibility = 'visible';
        }
    }

    return (
        <div>
            <p>login</p>
            <input value={login} onChange={e => updateLogin(e.target.value)}/>
            <p>password</p>
            <input value={password} onChange={e => updatePassword(e.target.value)}/>
            <p className="test" style={{visibility: "hidden"}}>Неверные учетные данные пользователя</p>
            <button onClick={loginFunction}>Авторизация</button>
            <button>Регистрация</button>
        </div>
    );
}

export default Login;