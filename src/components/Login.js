import React, { useState } from 'react'
import '../Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault()
        console.log("E:", e);

        //some fancy firebase login shittt....
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        ///do some fancy firebase register shiitt..

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //it successfully created a new user with email and password
                console.log("auth:", auth);
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))

    }

    return (
        <div className="login">
            <Link to="/">
                <img
                    alt="#"
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                ></img>
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input
                        type="text"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button
                        className="login__signInButton"
                        type="submit"
                        onClick={signIn}
                    >Sign In</button>
                </form>

                <p>Leano off......................................</p>

                <button onClick={register} className="login__registerButton">Create your amazon account</button>
            </div>
        </div>
    )
}

export default Login