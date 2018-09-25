import React, { Component } from 'react';

import './../resources/bootstrap/bootstrap.css';
import './../resources/bootstrap/bootstrap-theme.css';
import Result from './sortPicker/Result';
import VotingButton from './components/VotingButton';
import MainIcon from './components/MainIcon';
import { TRAINEE1, TRAINEE2, TIED, NONE, NONE_FIRST } from './../util/Constants';

export default class SortPicker extends Component {
    constructor(props) {
        super(props);
        let trainee1 = this.props.trainees[0];
        let trainee2 = this.props.trainees[1];

        this.state = {
            sortedTrainees: [],
            noneTrainees: [],
            pairCount: 1,
            progress: 0,
            trainee1: trainee1,
            trainee2: trainee2,
            nextTrainee: 2,
            left: 0,
            right: 0
        }

        this.onClick = this.onClick.bind(this);
        this.setNewTrainees = this.setNewTrainees.bind(this);
        this.setNoneTrainees = this.setNoneTrainees.bind(this);
        this.getIndex = this.getIndex.bind(this);
        this.getMidTrainee = this.getMidTrainee.bind(this);
    }

    onClick(opt) {
        let trainees = this.state.sortedTrainees.slice();
        let noneTrainees = this.state.noneTrainees.slice();
        let pairCount = this.state.pairCount;
        pairCount++;
        let left = this.state.left;
        let right = this.state.right;
        let g1 = this.getIndex(this.state.trainee1);

        switch(opt) {
            case TRAINEE1:
                left = g1;
                if (trainees.length === 0) {
                    trainees.push([this.state.trainee1], [this.state.trainee2]);
                    this.setNewTrainees(trainees, pairCount);
                } else if (right - left === 0) {
                    trainees.splice(left + 1, 0, [ this.state.trainee2 ]);
                    this.setNewTrainees(trainees, pairCount);
                } else {
                    const midTrainee = this.getMidTrainee(trainees, TRAINEE1, left, right);
                    this.setState({
                        pairCount: pairCount,
                        trainee1: midTrainee.trainee,
                        left: midTrainee.idx
                    });
                }
                break;
            case TRAINEE2:
                right = g1;
                if (trainees.length === 0) {
                    trainees.push([this.state.trainee2], [this.state.trainee1]);
                    this.setNewTrainees(trainees, pairCount);
                } else if (right - left === 0) {
                    trainees.splice(left, 0, [ this.state.trainee2 ]);
                    this.setNewTrainees(trainees, pairCount);
                } else {
                    const midTrainee = this.getMidTrainee(trainees, TRAINEE2, left, right);
                    this.setState({
                        pairCount: pairCount,
                        trainee1: midTrainee.trainee,
                        right: midTrainee.idx
                    });
                }
                break;
            case TIED:
                if (trainees.length === 0) {
                    trainees.push([this.state.trainee1, this.state.trainee2])
                } else {
                    trainees[g1].push(this.state.trainee2);
                }
                this.setNewTrainees(trainees, pairCount);
                break;
            case NONE:
                noneTrainees.push(this.state.trainee2);
                this.setNoneTrainees(trainees, noneTrainees, pairCount, NONE);
                break;
            case NONE_FIRST:
                noneTrainees.push(this.state.trainee1)
                this.setNoneTrainees(trainees, noneTrainees, pairCount, NONE_FIRST);
                break;
            default:
                break;
        }
    }

    setNewTrainees(trainees, pairCount) {
        const midTrainee = this.getMidTrainee(trainees);
        let nextTraineeIdx = this.state.nextTrainee;

        this.setState({
            sortedTrainees: trainees,
            progress: Math.floor((this.state.nextTrainee/this.props.trainees.length) * 100),
            pairCount: pairCount,
            trainee1: midTrainee.trainee,
            trainee2: this.props.trainees[nextTraineeIdx],
            nextTrainee: nextTraineeIdx + 1,
            left: 0,
            right: trainees.length - 1 // we want arr pos, not length
        });
    }

    setNoneTrainees(trainees, noneTrainees, pairCount, traineePicked) {
        let nextTraineeIdx = this.state.nextTrainee;
        let g1;
        if (trainees.length === 0) {
            traineePicked === NONE ? g1 = this.state.trainee1 : g1 = this.state.trainee2;
        } else {
            g1 = this.getMidTrainee(trainees).trainee;
        }

        this.setState({
            noneTrainees: noneTrainees,
            progress: Math.floor((this.state.nextTrainee/this.props.trainees.length) * 100),
            pairCount: pairCount,
            trainee1: g1,
            trainee2: this.props.trainees[nextTraineeIdx],
            nextTrainee: nextTraineeIdx + 1,
            left: 0,
            right: trainees.length - 1 // we want arr pos, not length
        });
    }

    getIndex(trainee) {
        const trainees = this.state.sortedTrainees
        for(let i = 0; i < trainees.length; i++) {
            for (let j = 0; j < trainees[i].length; j++) {
                if (trainee.name === trainees[i][j].name) {
                    return i;
                }
            }
        }
    }

    getMidTrainee(trainees, traineePicked = null, left = null, right = null) {
        if (left === null && right === null) {
            left = 0;
            right = trainees.length - 1; // we want arr pos, not length
        }

        let midIdx;
        if (traineePicked === TRAINEE1) {
            midIdx = Math.ceil((left + right) / 2);
        } else {
            midIdx = Math.floor((left + right) / 2);
        }
        const midTrainee = { idx: midIdx, trainee: trainees[midIdx][0] };
        return midTrainee;
    }

    render() {
        let sortPicker;
        if (this.state.nextTrainee > this.props.trainees.length) {
            let sortedTrainees = this.state.sortedTrainees;
            if (this.state.noneTrainees.length > 0) {
                sortedTrainees.push(this.state.noneTrainees);
            }
            sortPicker = <Result trainees={sortedTrainees} />
        } else {
            const trainee1 = <MainIcon trainee={this.state.trainee1} season={this.props.currentSeason} />
            const trainee2 = <MainIcon trainee={this.state.trainee2} season={this.props.currentSeason} />
            let firstPick = null;
            if (this.state.sortedTrainees.length === 0) {
                firstPick = 
                <div>
                    <VotingButton content={`No Opinion of ${this.state.trainee1.name}`} className='sort-other-btn' onClick={() => this.onClick(NONE_FIRST)} />
                </div>
            }

            sortPicker = 
                <div className='sort-picker'>
                    <p>Pair #{this.state.pairCount}</p>
                    <div className='flex flex-center'>
                        <VotingButton content={trainee1} className='sort-trainee-btn' onClick={() => this.onClick(TRAINEE1)} />
                        <p>vs</p>
                        <VotingButton content={trainee2} className='sort-trainee-btn' onClick={() => this.onClick(TRAINEE2)} />
                    </div>
                    <br />
                    <div>
                        <VotingButton content='Tied' className='sort-other-btn' onClick={() => this.onClick(TIED)} />
                    </div>
                    {firstPick}
                    <div>
                        <VotingButton content={`No Opinion of ${this.state.trainee2.name}`} className='sort-other-btn' onClick={() => this.onClick(NONE)} />
                    </div>
                </div>
        }

        const progressBarStyle = { width: `${this.state.progress}%` };
        return(
            <div>
                <div className='progress'>
                    <div className='progress-bar progress-bar-striped active' role='progressbar' style={progressBarStyle}></div>
                </div>
                <p>{this.state.progress}% Sorted</p>
                {sortPicker}
            </div>
        );
    }
}