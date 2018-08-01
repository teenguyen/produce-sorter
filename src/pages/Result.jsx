import React from 'react';

import MainIcon from './../components/MainIcon';
import MiniIcon from './../components/MiniIcon';

export default function Result(props) {
    let posCount = 1;
    let girls = props.girls;
    let top1 = [];
    let top3 = [];
    let top12 = [];
    let all = [];

    for (let i = 0; i < girls.length; i++) {
        let count = 0;
        if (i === 0) {
            for (let j = 0; j < girls[i].length; j++) {
                top1.push(
                    <div className='top1-girl'>
                        <MainIcon key={girls[i][j].name} girl={girls[i][j]} rank={posCount} />
                    </div>);
                count++;
            }
        }
        else if (top1.length + top3.length < 3) {
            for (let j = 0; j < girls[i].length; j++) {
                top3.push(
                    <div className='top3-girl'>
                        <MainIcon key={girls[i][j].name} girl={girls[i][j]} rank={posCount} />
                    </div>);
                count++;
            }
        } else if (top1.length + top3.length + top12.length < 12) {
            for (let j = 0; j < girls[i].length; j++) {
                top12.push(
                    <div className='top12-girl'>
                        <MainIcon key={girls[i][j].name} girl={girls[i][j]} rank={posCount} />
                    </div>);
                count++;
            }
        } else {
            for (let j = 0; j < girls[i].length; j++) {
                all.push(
                    <div className='flex all-girl' key={girls[i][j].name}>
                        <MiniIcon girl={girls[i][j]} rank={posCount} />
                        <div className='ranking'>{`${posCount}. `}</div>
                        <div className='desc'>
                            <p>{girls[i][j].name}</p>
                            <p>{girls[i][j].company}</p>
                        </div>
                    </div>
                );
                count++;
            }
        }
        posCount += count;
    }

    return(
        <div className='results'>
            <div className='flex top1'>{top1}</div>
            <br />
            <div className='flex top3'>{top3}</div>
            <br />
            <div className='flex top12'>{top12}</div>
            <br />
            <div className='flex all'>{all}</div>
        </div>
    );
}
