import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './coachDashboard.scss';
import ClientInfo from './clientsList/ClientInfo';
import ClientCard from './clientsList/ClientCard';

const CoachDashboard = ({ history }) => {
    const [users, setUsers] = useState();
    const [number, setNumber] = useState();
    const [verifyNumber, setVerifyNumber] = useState('');
    const [checkOne, setCheckOne] = useState(false);
    const [checkTwo, setCheckTwo] = useState(false);

    useEffect(() => {
        // Get request to airtable endpoint with api key appended to the end of url
        axios
            .get(
                'https://api.airtable.com/v0/app3X8S0GqsEzH9iW/Master?api_key=keyfahybUIpBkegFv'
            )
            .then(res => setUsers(res.data.records))
            .catch(err => console.log(err));
    }, []);

    const handleInput = e => {
        setNumber(e.target.value);
    };

    const handleInputTwo = e => {
        setVerifyNumber(e.target.value);
    };

    const handleCheckOne = () => {
        setCheckOne(true);
    };

    const handleCheckTwo = () => {
        setCheckTwo(true);
    };

    const handleCheckThree = () => {
        history.push('/clients');
    };

    return (
        <>
            <div className='dashboard'>
                <div className='side-one'>
                    <img
                        src='https://i.imgur.com/eZTEnXz.png'
                        alt='CoachMe Logo'
                    />
                </div>
                <div className='side-two'>
                    <h1>Sign Up</h1>
                </div>
                )}
            </div>
            )}
        </>
    );
};

export default CoachDashboard;
