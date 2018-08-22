import React from 'react';

export default function MainIcon(props) {
    let ranking = null;
    if (typeof(props.rank) !== 'undefined') {
        ranking = <p>{`${props.rank}. `}</p>;
    }
    
    return(
        <div className='main-icon'>
            <img src={props.girl.img} alt={props.girl.name} />
            <div className='desc'>
                {ranking}
                <div>
                    <p>{props.girl.name}</p>
                    <p>{props.girl.company}</p>
                </div>
            </div>
        </div>
    );
}