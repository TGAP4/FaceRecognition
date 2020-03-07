import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.jpeg';

const Logo = () => {
    return (
        <div className='logo'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 100, width: 100 }} >
                <div className="Tilt-inner"><img alt='brain logo' src={brain}/></div>
            </Tilt>
        </div>
    );
}

export default Logo;