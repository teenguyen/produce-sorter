import { connect } from 'react-redux';
import App from './../pages/App';

import { GIRLS } from '../util/Girls';

const mapStateToProps = (state, props) => ({
    group: '3',
    girls: GIRLS
});

const mapDispatchToProps = { };

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;