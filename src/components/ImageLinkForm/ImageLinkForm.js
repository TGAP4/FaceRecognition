import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onSubmit}) => {
    return (
        <div>
            <p className='f3'>
                {'This Artifical Brain Can Detect Faces From Pictures'}
            </p>
            <div className='flex justify-center'>
                <div className='form pa4 br3 shadow-5'>
                    <input  className='f4 pa2 w-70 center' 
                            type='text' 
                            onChange={onInputChange}/>
                    <button className='f4 w-30 grow link ph3 pv2 dib white bg-light-purple'
                            onClick={onSubmit}>
                        Detect
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;