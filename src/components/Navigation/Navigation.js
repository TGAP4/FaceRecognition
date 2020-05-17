import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {
    return isSignedIn ?
        <nav className='flex justify-end'>
            <p onClick={() => onRouteChange('signout')} className='f4 link dim black pointer pv2 pr2 mr4'>Sign Out</p>
        </nav>
       : <nav className='flex justify-end'>
            <p onClick={() => onRouteChange('signin')} className='f4 link dim black pointer pv2 pr2 mr3'>Sign In</p>
            <p onClick={() => onRouteChange('register')} className='f4 link dim black pointer pv2 pr2 mr4'>Register</p>
        </nav>
}

export default Navigation;