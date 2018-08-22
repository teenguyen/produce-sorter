import React from 'react';

export default function MiniIcon(props) {
    return(
        <div>
            <img className='mini-icon' src={props.girl.img} alt={props.girl.name} />
        </div>
    );
}