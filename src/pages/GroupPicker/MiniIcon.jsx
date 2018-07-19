import React from 'react';

export default function MiniIcon(props) {
    return(
        <div className='mini-icon'>
            <img src={props.girl.img} alt={props.girl.name} />
        </div>
    );
}