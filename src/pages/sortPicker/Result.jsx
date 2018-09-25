import React from 'react';

import MainIcon from '../components/MainIcon';
import MiniIcon from '../components/MiniIcon';

export default function Result(props) {
    let posCount = 1;
    let trainees = props.trainees;
    let top1 = [];
    let top12 = [];
    let all = [];
    let top5Break = false;

    for (let i = 0; i < trainees.length; i++) {
        let count = 0;
        if (i === 0) {
            for (let j = 0; j < trainees[i].length; j++) {
                top1.push(
                    <div className='top12-trainee' key={trainees[i][j].name}>
                        <MainIcon trainee={trainees[i][j]} rank={posCount} season={props.currentSeason} />
                    </div>);
                count++;
            }
        } else if (top1.length + top12.length < 13) { 
            for (let j = 0; j < trainees[i].length; j++) {
                top12.push(
                    <div className='top12-trainee' key={trainees[i][j].name}>
                        <MainIcon trainee={trainees[i][j]} rank={posCount} season={props.currentSeason} />
                    </div>);
                count++;
            }
            if (posCount > 4 && !top5Break) {
                top12.push(<div className='mobile-break' key='i-am-a-magician' />);
                top5Break = true;
            }
        } else {
            for (let j = 0; j < trainees[i].length; j++) {
                all.push(
                    <div className='flex all-trainee' key={trainees[i][j].name}>
                        <div className='result-icon'>
                            <MiniIcon trainee={trainees[i][j]} rank={posCount} />
                            <div className='ranking'>{`${posCount}. `}</div>
                            <div className='desc'>
                                <p>{trainees[i][j].name}</p>
                                <p>{trainees[i][j].company}</p>
                            </div>
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
            <div className='flex flex-wrap top12'>{top1}</div>
            <div className='flex flex-wrap top12'>{top12}</div>
            <br />
            <div className='flex flex-wrap all'>{all}</div>
        </div>
    );
}