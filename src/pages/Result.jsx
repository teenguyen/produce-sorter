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
            top3.push(<MainIcon girl={girls[i][j]} rank={posCount} />);
        }
        posCount++;
    }

    // top 12
    for (let i = posCount; i < 13; i++) {
        for (let j = 0; j < girls[i].length; j++) {
            top12.push(<MainIcon girl={girls[i][j]} rank={posCount} />);
        }
        posCount++;
    }


    // all
    for (let i = posCount; i < girls.length; i++) {
        for (let j = 0; j < girls[i].length; j++) {
            all.push(
                <div>
                    <MiniIcon girl={girls[i][j]} rank={posCount} />
                    {`${posCount}. ${girls[i][j].name}`}
                </div>
            );
        }
        posCount++
    }

    return(
        <div className='results'>
            <div className='flex top3'>{top3}</div>
            <div className='flex top12'>{top12}</div>
            <div className='flex all'>{all}</div>
        </div>
    );
}
