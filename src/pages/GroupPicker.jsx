import React, { Component } from 'react';
import { ROUNDS } from './../util/Constants';
import { GIRLS } from './../util/Girls';

export default class GroupPicker extends Component {
    render() {
        const options = ROUNDS.map(group => <option key={group.key} value={group.key}>{group.name}</option>)
        return(
            <div>
                <select value={this.props.group} onChange={this.props.onChange}>
                    {options}
                </select>
                <br />
                <br />
                <button type='button' className='startButton'>START!</button>
            </div>
        );
    }
}