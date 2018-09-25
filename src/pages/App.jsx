import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import GroupPickerContainer from '../containers/GroupPickerContainer';
import SortPickerContainer from '../containers/SortPickerContainer';

import s1Logo from './../resources/s1/logo.png';
import s2Logo from './../resources/s2/logo.png';
import s3Logo from './../resources/s3/logo.png';

export default function App(props) {
    let logo;
    switch(props.season) {
        case '1':
            logo = s1Logo;
            break;
        case '2':
            logo = s2Logo;
            break;
        case '3':
        default:
            logo = s3Logo;
            break;
    }

    return(
        <div className='wrapper'>
            <div className={`header flex flex-center bg-s${props.season}`}>
                <Link to='/'>
                    <img src={logo} alt='PRODUCE Logo' />
                </Link>
            </div>
            <div className='content'>
                <Switch>
                    <Route path='/sort' component={SortPickerContainer} />
                    <Route component={GroupPickerContainer} />
                </Switch>
            </div>
            <div className={`footer bg-s${props.season}`} />
        </div>
    );
};