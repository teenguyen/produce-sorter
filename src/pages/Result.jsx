import React from 'react';

import MainIcon from './../components/MainIcon';

export default function Result(props) {
    let posCount = 0;

    let first = props.girls[0].map(girl => <MainIcon girl={girl} rank='1' />)
    posCount += first.length;

    let secondThird = props.girls[1].map(girl => <MainIcon girl={girl} rank='2' />)
    secondThird.push(...(props.girls[2].map(girl => <MainIcon girl={girl} rank='3' />)));
    posCount += secondThird.length;

    let top12 = [];

    return(
        <div>
            <div className='first'>{first}</div>
            <div className='second-third'>{secondThird}</div>
            <div className='top12'>{top12}</div>
        </div>
    );
}