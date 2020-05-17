import React from 'react';

const Rank = ({name, entries}) => {
    return (
        <div>
            <div className='black f3 mb3 mt3'>
                {`${name}, your total number of images submitted is...`}
            </div>
            <div className='white f1'>
                {entries}
            </div>
        </div>
    )
}

export default Rank;