import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MiniIcon from './components/MiniIcon';
import { shuffle } from './../util/Functions';
import { SEASONS, S1ROUNDS, S2ROUNDS, S3ROUNDS } from './../util/Constants';
import { S1Trainees } from './../util/S1Trainees';
import { S2Trainees } from './../util/S2Trainees';
import { S3Trainees } from './../util/S3Trainees';

export default class GroupPicker extends Component {
    constructor(props) {
        super(props);
        const availableSeasons = SEASONS.map(group => <option key={group.key} value={group.key}>{group.name}</option>);
        this.state = {
            availableSeasons: availableSeasons,
            availableGroups: S3ROUNDS.map(group => <option key={group.key} value={group.key}>{group.name}</option>)
        }
        this.onChangeSeason = this.onChangeSeason.bind(this);
        this.onChangeGroup = this.onChangeGroup.bind(this);
    }

    onChangeSeason(event) {
        const s1Groups = S1ROUNDS.map(group => <option key={group.key} value={group.key}>{group.name}</option>);
        const s2Groups = S2ROUNDS.map(group => <option key={group.key} value={group.key}>{group.name}</option>);
        const s3Groups = S3ROUNDS.map(group => <option key={group.key} value={group.key}>{group.name}</option>);
        switch(event.target.value) {
            case '1':
                this.props.updateTrainees(S1Trainees);
                this.setState({
                    availableGroups: s1Groups
                });
                break;
            case '2':
                this.props.updateTrainees(S2Trainees);
                this.setState({
                    availableGroups: s2Groups
                });
                break;
            case '3':
            default:
                this.props.updateTrainees(S3Trainees);
                this.setState({
                    availableGroups: s3Groups
                });
                break;
        }
        this.props.setSeason(event.target.value);
    }

    onChangeGroup(event) {
        this.props.setGroup(event.target.value);
    }

    render() {
        let traineeList = this.props.trainees.filter(trainee => {
            switch(this.props.currentGroup) {
                case '5':
                    return !trainee.left && !trainee.elim1 && !trainee.elim2 && !trainee.elim3 && !trainee.final;
                case '4':
                    return !trainee.left && !trainee.elim1 && !trainee.elim2 && !trainee.elim3;
                case '3':
                    return !trainee.left && !trainee.elim1 && !trainee.elim2;
                case '2':
                    return !trainee.left && !trainee.elim1;
                case '1':
                    return !trainee.left
                case '0':
                default:
                    return true;
            }
        });
        traineeList = shuffle(traineeList);
        const traineeObj = traineeList.map(trainee => <MiniIcon key={trainee.name} trainee={trainee} />);
        
        return(
            <div className='group-picker'>
                <h2>Welcome to the PRODUCE Sorter</h2>
                <p className='sub-text'>For best results, avoid picking tied.</p> 
                <p className='sub-text'>Trainees that fall into no opinion will be removed from the sort and added to the bottom of your results.</p>
                <p className='sub-text'>Please <a href='https://github.com/RYUUSEiiSTAR/produce48-sorter/issues' alt='Github issues page for PRODUCE48-SORTER'>report any issues here</a></p>
                <br />
                <select value={this.props.currentSeason} onChange={this.onChangeSeason}>
                    {this.state.availableSeasons}
                </select>
                <br />
                <select value={this.props.currentGroup} onChange={this.onChangeGroup}>
                    {this.state.availableGroups}
                </select>
                <br />
                <br />
                <Link to='/sort'>
                    <button type='button' className='start-btn' onClick={() => this.props.updateTrainees(traineeList) }>
                        START!
                    </button>
                </Link>
                <br />
                <br />
                <div className='flex flex-wrap'>
                    {traineeObj}
                </div>
            </div>
        );
    }
}