import { connect } from 'react-redux';
import SortPicker from './../pages/SortPicker';

const mapStateToProps = (state, nextProps) => ({ 
    currentSeason: state.season,
    trainees: state.trainees
});

const mapDispatchToProps = { };

const SortPickerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SortPicker);

export default SortPickerContainer;