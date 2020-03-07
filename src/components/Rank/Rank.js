import React from 'react';

const Rank = ({name, entries}) => {
    return (
        <div>
            <div className='white f3 mt5'>
                {`${name}, your total number of images submitted is...`}
            </div>
            <div className='white f1'>
                {entries}
            </div>
        </div>
    )
}

export default Rank;