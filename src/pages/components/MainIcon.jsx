import React from 'react';

export default function MainIcon(props) {
    let ranking = null;
    if (typeof(props.rank) !== 'undefined') {
        ranking = <p>{`${props.rank}. `}</p>;
    }
    
    return(
        <div className={`main-icon color-s${props.season} bg-color-30-s${props.season}`}>
            <img src={props.trainee.img} alt={props.trainee.name} />
            <div className='desc'>
                {ranking}
                <div>
                    <p>{props.trainee.name}</p>
                    <p>{props.trainee.company}</p>
                </div>
            </div>
        </div>
    );
}