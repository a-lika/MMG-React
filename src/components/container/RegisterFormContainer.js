import React, { Component } from "react";
import Registration from './../presentational/registration-form/Registration';
import { connect } from 'react-redux';
import { addUserInfo } from '../../actions';
import { Redirect } from 'react-router';

const mapStateToProps = (state) => {
    return {
        firstName: state.firstName,
        lastName: state.lastName,
        email: state.email,
    }
};

class RegisterFormContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: false,
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            email: this.props.email,
        }
    }

    handleChangefirstName = (event) => {
        this.setState({ firstName: event.target.value });
    }

    handleChangelastName = (event) => {
        this.setState({ lastName: event.target.value });
    }

    handleChangeEmail = (event) => {
        this.setState({ email: event.target.value });
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch(addUserInfo(this.state.firstName, this.state.lastName, this.state.email));
        this.setState({ redirect: true })
    }

    render() {
        if (this.state.redirect) {
            return (
                <Redirect to='/gamefield' />
            )
        }
        return (
            <Registration
                toStart={this.handleOnSubmit}
                handleChangefirstName={this.handleChangefirstName}
                handleChangelastName={this.handleChangelastName}
                handleChangeEmail={this.handleChangeEmail}
                firstNameValue={this.state.firstName}
                lastNameValue={this.state.lastName}
                emailValue={this.state.email}
            />
        )
    }
};

export default connect(
    mapStateToProps,
)(RegisterFormContainer);

export { RegisterFormContainer };
