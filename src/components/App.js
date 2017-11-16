import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from './Home';
import Header from './Header';

const mapStateToProps = state => ({
    appName: state.appName
});

class App extends Component {
    render() {
        return (
            <div>
                <Header appName={this.props.appName} />
                <Home />
            </div>
        )
    }
}

export default connect(mapStateToProps, () => ({}))(App);