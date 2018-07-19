import React, { Component } from 'react';
import buckets from 'buckets-js';

import MainIcon from './../components/MainIcon';

export default class SortPicker extends Component {
    constructor(props) {
        super(props);
        let btree = buckets.BSTree;
        this.state = {
            sortedGirls: btree
        }

        this.handleVote = this.handleVote.bind(this);
    }

    handleVote() {

    }

    render() {
        return(
            <div>
                <MainIcon girl={this.props.state.girls[0]} />
            </div>
        );
    }
}