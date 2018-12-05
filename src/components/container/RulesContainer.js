import React, { Component } from "react";
import Rules from './../presentational/start-window/Rules';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        state
    }
};

class RulesContainer extends Component {
    render() {
        return (
            <Rules />
        )
    }
};

export default connect(
    mapStateToProps,
)(RulesContainer);

export { RulesContainer };
