import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './resetPassword.scss';

const ResetPassword = ({ match }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassord, setConfirmPassword] = useState('');
    const [update, setUpdate] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        axios
            .get('http://localhost:4000/reset', {
                params: {
                    resetPasswordToken: match.params.token
                }
            })
            .then(res => {
                console.log(res);
                if (res.data.message === 'password reset link a-ok') {
                    setUsername(res.data.username);
                    setUpdate(false);
                    setIsLoading(false);
                    setError(false);
                } else {
                    setUpdate(false);
                    setIsLoading(false);
                    setError(true);
                }
            })
            .catch(err => {
                console.log(err.data);
            });
    }, []);

    const handleUsername = e => {
        setUsername(e.target.value);
    };
    const handlePassword = e => {
        setPassword(e.target.value);
    };
    const handleConfirmPassword = e => {
        setConfirmPassword(e.target.value);
    };

    const updatePassword = e => {
        e.preventDefault();
        axios
            .put('http://localhost:4000/updatePasswordViaEmail', {
                username: username,
                password: password
            })
            .then(res => {
                console.log(res.data);
                if (res.data.message === 'password updated') {
                    setUpdate(true);
                    setError(false);
                } else {
                    setUpdate(false);
                    setError(true);
                }
            })
            .catch(err => {
                console.log(err.data);
            });
    };

    return (
        <div className='Reset-Wrapper'>
            <div className='side-one'>
                <img src='https://i.imgur.com/eZTEnXz.png' alt='Placeholder' />
            </div>
            <div className='side-two'>
                <h1>Reset Password</h1>
                <p>
                    Welcome back! Please type new password to use for your
                    account.
                </p>
                <form className='Reset-Form-Wrapper' action=''>
                    <div className='input-Wrapper'>
                        <input
                            type='text'
                            placeholder='Username'
                            name='username'
                            className='password'
                            value={username}
                            onChange={handleUsername}
                        />
                        <input
                            type='text'
                            placeholder='Password'
                            name='password'
                            className='password'
                            value={password}
                            onChange={handlePassword}
                        />
                        <input
                            type='text'
                            placeholder='Confirm Password'
                            name='confirmPassord'
                            className='password'
                            value={confirmPassord}
                            onChange={handleConfirmPassword}
                        />
                    </div>
                    {error ? (
                        <h4>
                            Problem resetting password. Please send another
                            reset link.
                        </h4> ? (
                            isLoading
                        ) : (
                            <h1>Loading User Data...</h1>
                        )
                    ) : (
                        <p>
                            Your password has been successfully reset, please
                            try logging in again.
                        </p>
                    )}
                </form>
                <div className='confirm-btn' onClick={updatePassword}>
                    Confirm
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
