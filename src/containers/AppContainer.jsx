import { connect } from 'react-redux';
import App from './../pages/App';

const mapStateToProps = (state, nextProps) => ({
    season: state.season,
    group: state.group,
    trainees: state.trainees
});

const mapDispatchToProps = { };

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;