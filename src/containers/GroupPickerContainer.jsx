import { connect } from 'react-redux';
import GroupPicker from './../pages/GroupPicker';

import { setSeason, setGroup , updateTrainees } from './../actions/actions';
const mapStateToProps = (state, nextProps) => ({
    currentSeason: state.season,
    currentGroup: state.group,
    trainees: state.trainees
});

const mapDispatchToProps = {
    setSeason,
    setGroup,
    updateTrainees
};

const GroupPickerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(GroupPicker);

export default GroupPickerContainer;