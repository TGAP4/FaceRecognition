import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {
    return isSignedIn ?
        <nav className='flex justify-end'>
            <p onClick={() => onRouteChange('signout')} className='f3 link dim black underline pointer pa3'>Sign Out</p>
        </nav>
       : <nav className='flex justify-end'>
            <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pointer pa3'>Sign In</p>
            <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pointer pa3'>Register</p>
        </nav>
}

export default Navigation;