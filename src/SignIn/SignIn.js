import React, { Component } from 'react';
import SignInCss from './SignIn.css';
import SignInImg from '../images/imgsignin.png'
import {
   BrowserRouter as Router,
   Link
} from 'react-router-dom';
import SignUp from '../SignUp/SignUp';


class SignIn extends React.Component {

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
         fields["emailid"] = "";
         fields["password"] = "";
         this.setState({ fields: fields });
         alert("Form submitted");
      }

   }

   validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;


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
            errors["password"] = "*Please enter secure and strong password.";
         }
      }

      this.setState({
         errors: errors
      });
      return formIsValid;


   }



   render() {
      return (

            <div id="register">
               <div className="container">
                  <div className="row justify-content-between">
                     <div className="col-md-5">
                        <img src={SignInImg} className="img-fluid" />
                     </div>
                     <div className="col-md-6 my-auto"><h3 className=" text-center">Login</h3>
                        <form method="post" name="userRegistrationForm" onSubmit={this.submituserRegistrationForm} className="row">
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
                              <input type="submit" className="purple-btn signin-btn w-100" value="Sign In" />
                           </div>
                           <div className="col-12 text-center dont-have-txt">
                                    Don't have account? 
                                    <Link
                                 to="/sign-up"
                                
                              >
                                  Sign Up
                           </Link>
                                    </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
      );
   }


}
export default SignIn;