import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({box, imageUrl}) => {
    return (
        <div className='flex justify-center ma'>
            <div className='absolute mt2'>
                <img id='inputimage' alt='' src={imageUrl} width='500px' height='auto'/>
                <div className='boundingBox' style={{top: box.top, right: box.right, left: box.left, bottom: box.bottom}}></div>
            </div>
        </div>
    );
}

export default FaceRecognition;