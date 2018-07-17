import React, { Component } from 'react';
import GroupPicker from './pages/GroupPicker';
import SortPicker from './pages/SortPicker';
import './App.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            group: null
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        this.setState({
            group: event.target.value
        });
    }

    render() {
        let contentStyle = {
        padding: '100px 0'
        };

        return(
        <div>
            <div className='header' />
            <div className='content'>
                <GroupPicker group={this.state.group} onChange={this.onChange} />
            </div>
            <div className='footer'>
            </div>
        </div>
        );
    }
}