import { connect } from 'react-redux';
import App from './../pages/App';

const mapStateToProps = (state, nextProps) => ({
    group: state.group,
    girls: state.girls
});

const mapDispatchToProps = { };

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;