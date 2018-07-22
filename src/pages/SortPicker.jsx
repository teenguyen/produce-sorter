import React, { Component } from 'react';
import { Redirect } from 'react-router';
import VotingButton from './../components/VotingButton';
import './../resources/bootstrap/bootstrap.css';
import './../resources/bootstrap/bootstrap-theme.css';

import MainIcon from './../components/MainIcon';
import { GIRL1, GIRL2, TIED, NONE } from './../util/Constants';

export default class SortPicker extends Component {
    constructor(props) {
        super(props);
        let girl1 = this.props.state.girls[0];
        let girl2 = this.props.state.girls[1];

        let firstSort = [];
        firstSort.push(girl1);
        
        let sortedGirls = [];
        sortedGirls.push(firstSort);

        this.state = {
            sortedGirls: sortedGirls,
            noneGirls: [],
            pairCount: 1,
            progress: 0,
            girl1: girl1,
            girl2: girl2,
            nextGirl: 2,
            left: 0,
            right: sortedGirls.length - 1 // we want arr pos, not length
        }

        this.onClick = this.onClick.bind(this);
        this.setNewGirls = this.setNewGirls.bind(this);
        this.getIndex = this.getIndex.bind(this);
        this.getMidGirl = this.getMidGirl.bind(this);
    }

    onClick(opt) {
        let girls = this.state.sortedGirls.slice(); // y u not immutable omfg
        let pairCount = this.state.pairCount;
        pairCount++;
        let left = this.state.left;
        let right = this.state.right;
        let g1 = this.getIndex(this.state.girl1);

        switch(opt) {
            case GIRL1:
                left = g1;
                if (right - left === 0) {
                    girls.splice(left + 1, 0, [ this.state.girl2 ]);
                    this.setNewGirls(girls, pairCount);
                } else {
                    const midGirl = this.getMidGirl(girls, left, right);
                    this.setState({
                        pairCount: pairCount,
                        girl1: midGirl.girl,
                        left: midGirl.idx
                    });
                }
                break;
            case GIRL2:
                right = g1;
                if (right - left === 0) {
                    girls.splice(left, 0, [ this.state.girl2 ]);
                } else {
                    const midGirl = this.getMidGirl(girls, left, right);
                    this.setState({
                        pairCount: pairCount,
                        girl1: midGirl.girl,
                        right: midGirl.idx
                    });
                }
                break;
            case TIED:
                girls[g1].push(this.state.girl2);
                this.setNewGirls(girls, pairCount);
                break;
            case NONE:
                let noneGirls = this.state.noneGirls;
                noneGirls.push(this.state.girl2)
                const midGirl = this.getMidGirl(girls);
                let nextGirlIdx = this.state.nextGirl;

                this.setState({
                    noneGirls: noneGirls,
                    progress: Math.floor(((this.state.nextGirl - 1)/this.props.state.girls.length) * 100),
                    pairCount: pairCount,
                    girl1: midGirl.girl,
                    girl2: this.props.state.girls[nextGirlIdx],
                    nextGirl: nextGirlIdx + 1,
                    left: 0,
                    right: girls.length - 1 // we want arr pos, not length
                });
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
            progress: Math.floor(((this.state.nextGirl - 1)/this.props.state.girls.length) * 100),
            pairCount: pairCount,
            girl1: midGirl.girl,
            girl2: this.props.state.girls[nextGirlIdx],
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

    getMidGirl(girls, left = null, right = null) {
        if (left === null && right === null) {
            left = 0;
            right = girls.length - 1; // we want arr pos, not length
        }

        const midIdx = Math.ceil((left + right) / 2);
        const midGirl = { idx: midIdx, girl: girls[midIdx][0] };
        return midGirl;
    }

    static getDerivedStateFromProps(props, state) {
        if (state.nextGirl > props.state.girls.length) {
            let allGirls = state.sortedGirls.slice();
            let noneGirls = state.noneGirls;
            if (noneGirls.length > 0) {
                allGirls.push(state.noneGirls);
            }
            props.setGirls(allGirls);
        }

        return null;
    }

    render() {
        if (this.state.nextGirl > this.props.state.girls.length) {
            return <Redirect to='/results' push={true} />
        }

        const progressBarStyle = { width: `${this.state.progress}%` };
        const girl1 = <MainIcon girl={this.state.girl1} />
        const girl2 = <MainIcon girl={this.state.girl2} />
        return(
            <div className='sort-picker'>
                <div className='progress'>
                    <div className='progress-bar progress-bar-striped active' role='progressbar' style={progressBarStyle}></div>
                </div>
                <div>
                    <p>{this.state.progress}% Sorted</p>
                    <p>Pair #{this.state.pairCount}</p>
                </div>
                <br />
                <div>
                    <div className='pair'>
                        <VotingButton content={girl1} className='sort-girl-btn' onClick={() => this.onClick(GIRL1)} />
                        <p>vs</p>
                        <VotingButton content={girl2} className='sort-girl-btn' onClick={() => this.onClick(GIRL2)} />
                    </div>
                    <br />
                    <div>
                        <VotingButton content='Tied' className='sort-other-btn' onClick={() => this.onClick(TIED)} />
                    </div>
                    <div>
                        <VotingButton content={`No Opinion of ${this.state.girl2.name}`} className='sort-other-btn' onClick={() => this.onClick(NONE)} />
                    </div>
                </div>
            </div>
        );
    }
}