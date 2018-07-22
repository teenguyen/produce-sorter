import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import GroupPicker from './pages/GroupPicker';
import SortPicker from './pages/SortPicker';
import Result from './pages/Result';
import { GIRLS } from './util/Girls';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            group: 0,
            girls: GIRLS
        };
        this.onReady = this.onReady.bind(this);
        this.setGirls = this.setGirls.bind(this);
    }

    onReady(group, girlList) {
        this.setState({ group: group, girls: girlList });
    }

    setGirls(girls) {
        this.setState({ girls: girls });
    }

    render() {
        return(
            <div className='wrapper'>
                <div className='header' />
                <div className='content'>
                    <Switch>
                        <Route path='/sort' render={() => <SortPicker state={this.state} setGirls={this.setGirls} />} />
                        <Route path='/results' render={() => <Result state={this.state} />} />
                        <Route render={() => <GroupPicker state={this.state} onReady={this.onReady}/>} />
                    </Switch>
                </div>
                <div className='footer' />
            </div>
        );
    }
}