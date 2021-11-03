import React from 'react'
import { Link } from 'react-router-dom'

export const LoginScreen = () => {
    return (
        <>
            <h3 className="auth__title">Login</h3>
            <form>
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
                <button
                    type="submit"
                    className="btn btn-primary btn-block">
                    Login
                </button>

                <div className="auth__social-networks mb-5">
                    <p>Login with social networks</p>
                    <div
                        className="google-btn"
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>

                </div>

                <Link
                    className="link"
                    to="/auth/register">
                    <span className="underline">Create new account</span>

                </Link>
            </form>
        </>
    )
}
