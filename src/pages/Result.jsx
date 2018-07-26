import React from 'react';

import MainIcon from './../components/MainIcon';
import MiniIcon from './../components/MiniIcon';

export default function Result(props) {
    let posCount = 1;
    let girls = props.girls;
    let top3 = [];
    let top12 = [];
    let all = [];

    // top 3
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < girls[i].length; j++) {
            top3.push(<MainIcon key={girls[i][j].name} girl={girls[i][j]} rank={posCount} />);
        }
        posCount++;
    }

    // top 12
    // because position is counted from 1, not 0~
    for (let i = (posCount - 1); i < 12; i++) {
        for (let j = 0; j < girls[i].length; j++) {
            top12.push(<MainIcon key={girls[i][j].name} girl={girls[i][j]} rank={posCount} />);
        }
        posCount++;
    }

    // all
    // because position is counted from 1, not 0~
    for (let i = (posCount - 1); i < girls.length; i++) {
        for (let j = 0; j < girls[i].length; j++) {
            all.push(
                <div className='flex' key={girls[i][j].name}>
                    <MiniIcon girl={girls[i][j]} rank={posCount} />
                    <div className='ranking'>{`${posCount}. `}</div>
                    <p>{girls[i][j].name}</p>
                </div>
            );
        }
        posCount++;
    }

    return(
        <div className='results'>
            <div className='flex top3'>{top3}</div>
            <div className='flex top12'>{top12}</div>
            <div className='flex all'>{all}</div>
        </div>
    );
}
