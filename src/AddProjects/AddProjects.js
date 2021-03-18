import React from 'react';
import SignUpCss from '../SignUp/SignUp.css'


class AddProjects extends React.Component {

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
            fields["projectName"] = "";
            fields["savingAmount"] = "";
            fields["targetAmount"] = "";
            fields["targetDate"] = "";
            this.setState({ fields: fields });
            console.log(this.state.fields.projectName);
            console.log(this.state.fields.savingAmount);
            console.log(this.state.fields.targetAmount);
            console.log(this.state.fields.targetDate);
            alert("Form submitted");
        }

    }

    validateForm() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["projectName"]) {
            formIsValid = false;
            errors["projectName"] = "*Please enter your Project Name";
        }

        if (!fields["savingAmount"]) {
            formIsValid = false;
            errors["savingAmount"] = "*Please enter your Saving Amount.";
        }

        if (!fields["targetAmount"]) {
            formIsValid = false;
            errors["targetAmount"] = "*Please enter your Target Amount";
        }

        if (!fields["targetDate"]) {
            formIsValid = false;
            errors["targetDate"] = "*Please enter your Target Date";
        }

        this.setState({
            errors: errors
        });
        return formIsValid;


    }
    render() {
    return (
        <div className="addprojects-bg mt-5 mb-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                    <div className="row">
                        <div className="col-12 mb-4">
                            <h1 className="text-center">Add Projects</h1>
                        </div>
                        
                    </div>
                    <form method="post" name="userRegistrationForm" onSubmit={this.submituserRegistrationForm} className="row">
                                    <div className="col-md-12 mb-2">
                                        <label className="form-label">Project Name:</label>
                                        <input type="text" name="projectName" value={this.state.fields.projectName} onChange={this.handleChange} className="form-control" />
                                        <div className="errorMsg">{this.state.errors.projectName}</div>
                                    </div>
                                    <div className="col-md-12 mb-2">
                                        <label className="form-label">Saving Amount:</label>
                                        <input type="number" name="savingAmount" value={this.state.fields.savingAmount} onChange={this.handleChange} className="form-control" />
                                        <div className="errorMsg">{this.state.errors.savingAmount}</div>
                                    </div>
                                    <div className="col-md-12 mb-2">
                                        <label className="form-label">Target Amount: </label>
                                        <input type="number" name="targetAmount" value={this.state.fields.targetAmount} onChange={this.handleChange} className="form-control" />
                                        <div className="errorMsg">{this.state.errors.targetAmount}</div>
                                    </div>
                                    <div className="col-md-12 mb-2">
                                        <label className="form-label">Target Date: </label>
                                        <input type="date" name="targetDate" value={this.state.fields.targetDate} onChange={this.handleChange} className="form-control" />
                                        <div className="errorMsg">{this.state.errors.targetDate}</div>
                                    </div>
                                    <div className="col-md-12 mt-2">
                                        <input type="submit" className="purple-btn w-100" value="Add" />
                                    </div>
                                </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
}

export default AddProjects;
