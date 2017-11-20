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
                {this.props.children}
            </div>
        )
    }
}

App.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default connect(mapStateToProps, () => ({}))(App);