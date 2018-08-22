import { connect } from 'react-redux';
import Result from './../pages/Result';

const mapStateToProps = (state, props) => ({ 
    girls: state.girls
});

const mapDispatchToProps = { };

const ResultContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Result);

export default ResultContainer;