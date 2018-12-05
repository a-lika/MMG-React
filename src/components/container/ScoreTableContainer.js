import React, { Component } from "react";
import ScoreTable from './../presentational/score/ScoreTable';
import { connect } from 'react-redux';
import { getTopUsers } from '../../actions';
import { findUsers } from '../../selectors';

const mapStateToProps = (state) => {
    return {
        users: state.topUsers
    }
};

class ScoreTableContainer extends Component {

    componentDidMount = () => {
        findUsers(resolve => resolve)
            .then(response => {
                this.props.dispatch(getTopUsers(response))
            })
    }

    render() {
        return (
            <ScoreTable
                users={this.props.users}
            />
        )
    }
};

export default connect(
    mapStateToProps
)(ScoreTableContainer);

export { ScoreTableContainer };
