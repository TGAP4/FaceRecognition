import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onSubmit}) => {
    return (
        <div>
            <p className='f5'>
                {'Enter an image URL with faces to detect'}
            </p>
            <div className='flex justify-center'>
                <div className='form w-40 mb2 pa3 br3 shadow-5'>
                    <input  className='f5 pa2 w-80 center' 
                            type='text' 
                            onChange={onInputChange}/>
                    <button className='f5 w-20 link ph3 pv2 dib white bg-light-purple'
                            onClick={onSubmit}>
                        Detect
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;