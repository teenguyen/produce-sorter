import { connect } from 'react-redux';
import SortPicker from './../pages/SortPicker';

const mapStateToProps = (state, nextProps) => ({ 
    trainees: state.trainees
});

const mapDispatchToProps = { };

const SortPickerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SortPicker);

export default SortPickerContainer;