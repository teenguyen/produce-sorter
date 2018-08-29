import React from 'react';

export default function MiniIcon(props) {
    return(
        <div>
            <img className='mini-icon' src={props.trainee.img} alt={props.trainee.name} />
        </div>
    );
}