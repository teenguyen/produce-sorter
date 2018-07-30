import React from 'react';

export default function MiniIcon(props) {
    const imgStyle = {
        height: '75px',
        width: '75px',
        padding: '5px'
    }

    return(
        <div className='mini-icon'>
            <img src={props.girl.img} alt={props.girl.name} style={imgStyle} />
        </div>
    );
}