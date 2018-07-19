import React from 'react';

export default function MainIcon(props) {
    return(
        <div className='main-icon'>
            <img src={props.girl.img} alt={props.girl.name} />
            <div>
                <p>{props.girl.name}</p>
                <p>{props.girl.company}</p>
            </div>
        </div> 
    );
}