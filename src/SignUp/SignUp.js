import React, { Component } from 'react';
import SignInImg from '../images/imgsignin.png'
import SignUpCss from '../SignUp/SignUp.css'
import {
    Link
 } from 'react-router-dom';

class SignUp extends React.Component {

    constructor() {
        super();
        this.state = {
            fields: {},
            errors: {}
        }

        this.handleChange = this.handleChange.bind(this);
        this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    };

    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });

    }

    submituserRegistrationForm(e) {
        e.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["username"] = "";
            fields["emailid"] = "";
            fields["mobileno"] = "";
            fields["password"] = "";
            this.setState({ fields: fields });
            alert("Form submitted");
        }

    }

    validateForm() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["username"]) {
            formIsValid = false;
            errors["username"] = "*Please enter your username.";
        }

        if (typeof fields["username"] !== "undefined") {
            if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["username"] = "*Please enter alphabet characters only.";
            }
        }

        if (!fields["emailid"]) {
            formIsValid = false;
            errors["emailid"] = "*Please enter your email-ID.";
        }

        if (typeof fields["emailid"] !== "undefined") {
            //regular expression for email validation
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["emailid"])) {
                formIsValid = false;
                errors["emailid"] = "*Please enter valid email-ID.";
            }
        }

        if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "*Please enter your password.";
        }

        if (typeof fields["password"] !== "undefined") {
            if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                formIsValid = false;
                errors["password"] = "*Please enter uppercase, lowercase, alphanumeric and capital letters";
            }
        }

        this.setState({
            errors: errors
        });
        return formIsValid;


    }



    render() {
        return (
            <div id="main-registration-container">
                <div id="register">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-md-5">
                                <img src={SignInImg} className="img-fluid" />
                            </div>
                            <div className="col-md-6 my-auto"><h3 className=" text-center">Create Account</h3>
                                <form method="post" name="userRegistrationForm" onSubmit={this.submituserRegistrationForm} className="row">
                                    <div className="col-md-12 mb-3">
                                        <label className="form-label">User Name:</label>
                                        <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} className="form-control" />
                                        <div className="errorMsg">{this.state.errors.username}</div>
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <label className="form-label">Email Address:</label>
                                        <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange} className="form-control" />
                                        <div className="errorMsg">{this.state.errors.emailid}</div>
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <label className="form-label">Password</label>
                                        <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} className="form-control" />
                                        <div className="errorMsg">{this.state.errors.password}</div>
                                    </div>
                                    <div className="col-md-12 mt-2">
                                        <input type="submit" className="purple-btn w-100" value="Sign Up" />
                                    </div>
                                    <div className="col-12 text-center dont-have-txt">
                                    Don't have account? 
                                    <Link
                                 to="/sign-in"
                                
                              >
                                  Log In
                           </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


}
export default SignUp;