import {useState} from "react";
import {useNavigate} from "react-router-dom";
import '../style/login.css';

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
            localStorage.setItem("username", login);
            localStorage.setItem("password", password);
            navigate('/nav');
        } else {
            document.querySelector('.test').style.visibility = 'visible';
        }
    }

    return (
        <div className="screen-1">

            <div className="email">
                <label>Login</label>
                <div className="sec-2">
                    <input placeholder="Username@gmail.com"
                           value={login}
                           onChange={e => updateLogin(e.target.value)}/>
                </div>
            </div>

            <div className="password">
                <label>Password</label>
                <input className="pass" type="password" placeholder="············"
                       value={password}
                       onChange={e => updatePassword(e.target.value)}/>
            </div>
            {/*<p className="test" style={{visibility: "hidden"}}>Неверные учетные данные пользователя</p>*/}
            <button className="login" onClick={loginFunction}>Авторизация</button>
            <button className="login">Регистрация</button>
        </div>
    );
}

export default Login;