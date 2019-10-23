import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './chooseLanguage.scss';

const ChooseLanguage = props => {
    const [langPref, setLangPref] = useState('esp');

    return (
        <div className='container'>
            <div className='title-container'>
                <h1 className='english-title'>Choose Language</h1>
                <h1 className='spanish-title'>Elige tu idioma preferido</h1>
            </div>
            <div className='lang-btn-container'>
                <button onClick={() => setLangPref('en')}>English</button>
                <button onClick={() => setLangPref('esp')}>
                    En Espa&ntilde;ol
                </button>
            </div>
            <div className='next-btn-container'>
                <Link className='next-btn' to='/translator'>
                    Next
                </Link>
            </div>
        </div>
    );
};

export default ChooseLanguage;
