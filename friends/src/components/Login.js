import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { AxiosWithAuth } from '../utils/axiosAuth';

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    const history = useHistory();

    const handleSubmit = e => {
    e.preventDefault();
    AxiosWithAuth()
        .post('/login', credentials)
        .then(res => {
            console.log(res);
            localStorage.setItem('token', res.data.payload);
            history.push('/friends');
        })
        .catch(err => console.log("Error: ", err));
    }

    const handleChange = e => {
        setCredentials({...credentials, [e.target.name]: e.target.value});
    }

    return (
        <div className='login-cont'>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label for='username'>Username</label>
                <input
                type="text"
                name="username"
                value={credentials.username}
                onChange={handleChange}
                />
                <br/>
                <label for='password'>Password</label>
                <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                />
                <br/>
                <button type='submit'>Log in</button>
            </form>
        </div>
    )
}

export default Login;