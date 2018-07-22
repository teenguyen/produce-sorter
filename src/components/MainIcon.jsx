import React from 'react';

export default function MainIcon(props) {
    console.log(props.rank)
    let ranking = null;
    if (typeof(props.rank) !== 'undefined') {
        ranking =
        <span className='ranking'>
            <p>{props.rank}</p>
        </span>
    }
    return(
        <div>
            <div className='main-icon'>
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