import React, { Component } from 'react';

import './../resources/bootstrap/bootstrap.css';
import './../resources/bootstrap/bootstrap-theme.css';
import ResultContainer from './../containers/ResultContainer';
import VotingButton from './components/VotingButton';
import MainIcon from './components/MainIcon';
import { GIRL1, GIRL2, TIED, NONE, NONE_FIRST } from './../util/Constants';

export default class SortPicker extends Component {
    constructor(props) {
        super(props);
        let girl1 = this.props.girls[0];
        let girl2 = this.props.girls[1];

        this.state = {
            sortedGirls: [],
            noneGirls: [],
            pairCount: 1,
            progress: 0,
            girl1: girl1,
            girl2: girl2,
            nextGirl: 2,
            left: 0,
            right: 0
        }

        this.onClick = this.onClick.bind(this);
        this.setNewGirls = this.setNewGirls.bind(this);
        this.setNoneGirls = this.setNoneGirls.bind(this);
        this.getIndex = this.getIndex.bind(this);
        this.getMidGirl = this.getMidGirl.bind(this);
    }

    onClick(opt) {
        let girls = this.state.sortedGirls.slice();
        let noneGirls = this.state.noneGirls.slice();
        let pairCount = this.state.pairCount;
        pairCount++;
        let left = this.state.left;
        let right = this.state.right;
        let g1 = this.getIndex(this.state.girl1);

        switch(opt) {
            case GIRL1:
                left = g1;
                if (girls.length === 0) {
                    girls.push([this.state.girl1], [this.state.girl2]);
                    this.setNewGirls(girls, pairCount);
                } else if (right - left === 0) {
                    girls.splice(left + 1, 0, [ this.state.girl2 ]);
                    this.setNewGirls(girls, pairCount);
                } else {
                    const midGirl = this.getMidGirl(girls, GIRL1, left, right);
                    this.setState({
                        pairCount: pairCount,
                        girl1: midGirl.girl,
                        left: midGirl.idx
                    });
                }
                break;
            case GIRL2:
                right = g1;
                if (girls.length === 0) {
                    girls.push([this.state.girl2], [this.state.girl1]);
                    this.setNewGirls(girls, pairCount);
                } else if (right - left === 0) {
                    girls.splice(left, 0, [ this.state.girl2 ]);
                    this.setNewGirls(girls, pairCount);
                } else {
                    const midGirl = this.getMidGirl(girls, GIRL2, left, right);
                    this.setState({
                        pairCount: pairCount,
                        girl1: midGirl.girl,
                        right: midGirl.idx
                    });
                }
                break;
            case TIED:
                if (girls.length === 0) {
                    girls.push([this.state.girl1, this.state.girl2])
                } else {
                    girls[g1].push(this.state.girl2);
                }
                this.setNewGirls(girls, pairCount);
                break;
            case NONE:
                noneGirls.push(this.state.girl2);
                this.setNoneGirls(girls, noneGirls, pairCount, NONE);
                break;
            case NONE_FIRST:
                noneGirls.push(this.state.girl1)
                this.setNoneGirls(girls, noneGirls, pairCount, NONE_FIRST);
                break;
            default:
                break;
        }
    }

    setNewGirls(girls, pairCount) {
        const midGirl = this.getMidGirl(girls);
        let nextGirlIdx = this.state.nextGirl;

        this.setState({
            sortedGirls: girls,
            progress: Math.floor((this.state.nextGirl/this.props.girls.length) * 100),
            pairCount: pairCount,
            girl1: midGirl.girl,
            girl2: this.props.girls[nextGirlIdx],
            nextGirl: nextGirlIdx + 1,
            left: 0,
            right: girls.length - 1 // we want arr pos, not length
        });
    }

    setNoneGirls(girls, noneGirls, pairCount, girlPicked) {
        let nextGirlIdx = this.state.nextGirl;
        let g1;
        if (girls.length === 0) {
            girlPicked === NONE ? g1 = this.state.girl1 : g1 = this.state.girl2;
        } else {
            g1 = this.getMidGirl(girls).girl;
        }

        this.setState({
            noneGirls: noneGirls,
            progress: Math.floor((this.state.nextGirl/this.props.girls.length) * 100),
            pairCount: pairCount,
            girl1: g1,
            girl2: this.props.girls[nextGirlIdx],
            nextGirl: nextGirlIdx + 1,
            left: 0,
            right: girls.length - 1 // we want arr pos, not length
        });
    }

    getIndex(girl) {
        const girls = this.state.sortedGirls
        for(let i = 0; i < girls.length; i++) {
            for (let j = 0; j < girls[i].length; j++) {
                if (girl.name === girls[i][j].name) {
                    return i;
                }
            }
        }
    }

    getMidGirl(girls, girlPicked = null, left = null, right = null) {
        if (left === null && right === null) {
            left = 0;
            right = girls.length - 1; // we want arr pos, not length
        }

        let midIdx;
        if (girlPicked === GIRL1) {
            midIdx = Math.ceil((left + right) / 2);
        } else {
            midIdx = Math.floor((left + right) / 2);
        }
        const midGirl = { idx: midIdx, girl: girls[midIdx][0] };
        return midGirl;
    }

    render() {
        let sortPicker;
        if (this.state.nextGirl > this.props.girls.length) {
            let sortedGirls = this.state.sortedGirls;
            sortedGirls.push(this.state.noneGirls);
            this.props.updateGirls(sortedGirls);
            sortPicker = <ResultContainer />
        } else {
            const girl1 = <MainIcon girl={this.state.girl1} />
            const girl2 = <MainIcon girl={this.state.girl2} />
            let firstPick = null;
            if (this.state.sortedGirls.length === 0) {
                firstPick = 
                <div>
                    <VotingButton content={`No Opinion of ${this.state.girl1.name}`} className='sort-other-btn' onClick={() => this.onClick(NONE_FIRST)} />
                </div>
            }

            sortPicker = 
                <div className='sort-picker'>
                    <p>Pair #{this.state.pairCount}</p>
                    <div className='flex flex-center'>
                        <VotingButton content={girl1} className='sort-girl-btn' onClick={() => this.onClick(GIRL1)} />
                        <p>vs</p>
                        <VotingButton content={girl2} className='sort-girl-btn' onClick={() => this.onClick(GIRL2)} />
                    </div>
                    <br />
                    <div>
                        <VotingButton content='Tied' className='sort-other-btn' onClick={() => this.onClick(TIED)} />
                    </div>
                    {firstPick}
                    <div>
                        <VotingButton content={`No Opinion of ${this.state.girl2.name}`} className='sort-other-btn' onClick={() => this.onClick(NONE)} />
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