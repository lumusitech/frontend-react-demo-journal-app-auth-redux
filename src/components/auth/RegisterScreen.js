import React from 'react'
import { Link } from 'react-router-dom'


export const RegisterScreen = () => {
    return (
        <>
            <h3 className="auth__title">Register</h3>
            <form>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="auth__input"
                    autoComplete="off" />
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="auth__input"
                    autoComplete="off" />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="auth__input" />
                <input
                    type="password"
                    name="password2"
                    placeholder="Confirm password"
                    className="auth__input" />
                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5">
                    Login
                </button>

                <Link
                    className="link mt-5"
                    to="/auth/login">
                    <span className="underline">Already register?</span>

                </Link>
            </form>
        </>
    )
}
