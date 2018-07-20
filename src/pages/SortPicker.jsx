import React, { Component } from 'react';
import VotingButton from './../components/VotingButton';
import './../resources/bootstrap/bootstrap.css';
import './../resources/bootstrap/bootstrap-theme.css';

import MainIcon from './../components/MainIcon';
import { GIRL1, GIRL2, TIED, NONE } from './../util/Constants';

export default class SortPicker extends Component {
    constructor(props) {
        super(props);
        let sortedGirls = [];
        sortedGirls.push(this.props.state.girls[0]);

        this.state = {
            sortedGirls: sortedGirls,
            pairCount: 0,
            progress: 50,
            girl1: sortedGirls[0],
            girl2: this.props.state.girls[1]
        }

        this.onClick = this.onClick.bind(this);
        this.binarySearch = this.binarySearch.bind(this);
    }

    onClick(opt) {
        switch(opt) {
            case GIRL1:
                break;
            case GIRL2:
                break;
            case TIED:
                break;
            case NONE:
                break;
            default:
                break;
        }
    }

    binarySearch() {
        return 0;
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