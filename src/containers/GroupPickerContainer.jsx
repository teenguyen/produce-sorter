import React from 'react';
import { connect } from 'react-redux';
import GroupPicker from './../pages/GroupPicker';

import { setGroup , updateGirls } from './../actions/actions';
import { ROUNDS } from './../util/Constants';

const mapStateToProps = (state, props) => ({
    girls: state.girls,
    availableGroups: ROUNDS.map(group => <option key={group.key} value={group.key}>{group.name}</option>),
    currentGroup: state.group
});

const mapDispatchToProps = {
    setGroup,
    updateGirls
};

const GroupPickerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(GroupPicker);

export default GroupPickerContainer;