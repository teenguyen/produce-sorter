import React from 'react';

export default function MainIcon(props) {
    let ranking = null;
    if (typeof(props.rank) !== 'undefined') {
        ranking =
        <span className='ranking'>
            <p>{props.rank}</p>
        </span>
    }
    return(
        <div className='main-icon'>
            <div className='icon-image-desc'>
                <img src={props.girl.img} alt={props.girl.name} />
                <div className='desc'>
                    <p>{props.girl.name}</p>
                    <p>{props.girl.company}</p>
                </div>
            </div>
            {ranking}
        </div>
    );
}