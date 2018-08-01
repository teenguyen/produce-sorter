import React from 'react';

export default function MainIcon(props) {
    let ranking = null;
    if (typeof(props.rank) !== 'undefined') {
        ranking = `${props.rank}. `;
    }
    
    return(
        <div className='main-icon'>
            <img src={props.girl.img} alt={props.girl.name} />
            <div className='flex flex-center flex-wrap desc'>
                <p>{ranking}{props.girl.name}</p>
                <p>{props.girl.company}</p>
            </div>
        </div>
    );
}