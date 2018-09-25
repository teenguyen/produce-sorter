import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MiniIcon from './components/MiniIcon';
import { shuffle } from './../util/Functions';
import { SEASONS, ROUNDS1, ROUNDS2, ROUNDS3 } from './../util/Constants';
import { traineesS1 } from './../util/TraineesS1';
import { traineesS2 } from './../util/TraineesS2';
import { traineesS3 } from './../util/TraineesS3';

export default class GroupPicker extends Component {
    constructor(props) {
        super(props);
        const availableSeasons = SEASONS.map(group => <option key={group.key} value={group.key}>{group.name}</option>);
        this.state = {
            availableSeasons: availableSeasons,
            availableGroups: ROUNDS3.map(group => <option key={group.key} value={group.key}>{group.name}</option>)
        }
        this.onChangeSeason = this.onChangeSeason.bind(this);
        this.onChangeGroup = this.onChangeGroup.bind(this);
    }

    onChangeSeason(event) {
        const groupS1 = ROUNDS1.map(group => <option key={group.key} value={group.key}>{group.name}</option>);
        const groupS2 = ROUNDS2.map(group => <option key={group.key} value={group.key}>{group.name}</option>);
        const groupS3 = ROUNDS3.map(group => <option key={group.key} value={group.key}>{group.name}</option>);
        this.props.setGroup('5');
        switch(event.target.value) {
            case '1':
                this.props.updateTrainees(traineesS1);
                this.setState({
                    availableGroups: groupS1
                });
                break;
            case '2':
                this.props.updateTrainees(traineesS2);
                this.setState({
                    availableGroups: groupS2
                });
                break;
            case '3':
            default:
                this.props.updateTrainees(traineesS3);
                this.setState({
                    availableGroups: groupS3
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
                <p className='sub-text'>Please <a className={`color-s${this.props.currentSeason}`} href='https://github.com/RYUUSEiiSTAR/produce48-sorter/issues' alt='Github issues page for PRODUCE48-SORTER'>report any issues here</a></p>
                <br />
                <select className={`select-s${this.props.currentSeason}`} value={this.props.currentSeason} onChange={this.onChangeSeason}>
                    {this.state.availableSeasons}
                </select>
                <br />
                <select className={`select-s${this.props.currentSeason}`} value={this.props.currentGroup} onChange={this.onChangeGroup}>
                    {this.state.availableGroups}
                </select>
                <br />
                <br />
                <Link to='/sort'>
                    <button type='button' className={`start-btn start-btn-s${this.props.currentSeason}`} onClick={() => this.props.updateTrainees(traineeList) }>
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