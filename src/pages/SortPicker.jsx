import React, { Component } from 'react';
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
            pairCount: 0,
            progress: 50,
            girl1: girl1,
            girl2: girl2,
            left: 0,
            right: 0
        }

        this.onClick = this.onClick.bind(this);
        this.getIndex = this.getIndex.bind(this);
        this.insertGirl = this.insertGirl.bind(this);
    }

    onClick(opt) {
        let girls = this.state.sortedGirls;
        const left = 0;
        const right = this.state.sortedGirls.length;
        const g1 = this.getIndex(this.state.girl1);
        switch(opt) {
            case GIRL1:
                break;
            case GIRL2:
                break;
            case TIED:
                girls[g1].push(this.state.girl2);
                this.setState({ sortedGirls: girls });
                break;
            case NONE:
                let noneGirls = this.state.noneGirls;
                noneGirls.push(this.state.girl2);
                this.setState({ noneGirls: noneGirls });
                break;
            default:
                break;
        }
    }

    getIndex(girl) {
        const girls = this.state.sortedGirls
        for(let i = 0; i < girls.length; i++) {
            if(girls[i].filter(sortedGirl => (sortedGirl.name === girl.name))) {
                return i;
            }
        }
    }

    insertGirl(idx) {
        
    }

    render() {
        const progressBarStyle = { width: `${this.state.progress}%` };
        const girl1 = <MainIcon girl={this.state.girl1} />
        const girl2 = <MainIcon girl={this.state.girl2} />
        return(
            <div className='sort-picker'>
                <div className='progress'>
                    <div className='progress-bar progress-bar-striped active' role='progressbar' style={progressBarStyle}></div>
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
                        <VotingButton content='None' className='sort-other-btn' onClick={() => this.onClick(NONE)} />
                    </div>
                </div>
            </div>
        );
    }
}