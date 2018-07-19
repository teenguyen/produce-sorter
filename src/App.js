import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import GroupPicker from './pages/GroupPicker';
import SortPicker from './pages/SortPicker';
import './App.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            group: 0
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        this.setState({
            group: event.target.value
        });
    }

    render() {
        return(
        <div className='wrapper'>
            <div className='header' />
            <div className='content'>
                <Route exact path="/" render={() => <GroupPicker group={this.state.group} onChange={this.onChange} />} />
                <Route path="/home" render={() => <GroupPicker group={this.state.group} onChange={this.onChange} />} />
                <Route path="/sort" render={() => <SortPicker />} />
            </div>
            <div className='footer' />
        </div>
        );
    }
}