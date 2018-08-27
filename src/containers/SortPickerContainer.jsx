import { connect } from 'react-redux';
import SortPicker from './../pages/SortPicker';

import { updateGirls } from './../actions/actions';

const mapStateToProps = (state, nextProps) => ({ 
    girls: state.girls
});

const mapDispatchToProps = { 
    updateGirls
};

const SortPickerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SortPicker);

export default SortPickerContainer;