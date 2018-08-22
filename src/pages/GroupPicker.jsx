import React from 'react';
import { Link } from 'react-router-dom';

import MiniIcon from './components/MiniIcon';
import { shuffle } from './../util/Functions';

const GroupPicker = () => {
    let girlList = this.props.girls.filter(girl => {
        switch(this.props.currentGroup) {
            // case '4':
            //     return !girl.left && !girl.elim1 && !girl.elim2 && !girl.elim3;
            case '3':
                return !girl.left && !girl.elim1 && !girl.elim2;
            case '2':
                return !girl.left && !girl.elim1;
            case '1':
                return !girl.left
            case '0':
            default:
                return true;
        }
    });
    girlList = shuffle(girlList);
    const girlObj = girlList.map(girl => <MiniIcon key={girl.name} girl={girl} />);

    return(
        <div className='group-picker'>
            <h2>Welcome to the PRODUCE 48 Sorter</h2>
            <p className='sub-text'>For best results, avoid picking tied.</p> 
            <p className='sub-text'>Girls that fall into none will be removed from the sort and added to the bottom of your results.</p>
            <p className='sub-text'>Please <a href='https://github.com/RYUUSEiiSTAR/produce48-sorter/issues' alt='Github issues page for PRODUCE48-SORTER'>report any issues here</a></p>
            <br />
            <select value={this.props.currentGroup} onChange={this.onChange}>
                {this.props.availableGroups}
            </select>
            <br />
            <br />
            <Link to='/sort'>
                <button type='button' className='start-btn' onClick={() => {this.props.setGroup(this.state.currentGroup); this.props.updateGirls(girlList); }}>
                    START!
                </button>
            </Link>
            <br />
            <br />
            <div className='flex flex-wrap'>
                {girlObj}
            </div>
        </div>
    );
}

export default GroupPicker;