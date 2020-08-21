import React, { PureComponent } from 'react';
import { getRegistrationForm, checkInvalid, checkValidity, checkFormValidity } from '../../common/utility'
import { TextField, MenuItem } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default class Registration extends PureComponent {

    state = {
        registrationForm: getRegistrationForm(),
        formValid: false
    }

    inputChangeHandler = (event, fieldName) => {
        let form = { ...this.state.registrationForm };
        let fieldObj = { ...form[fieldName] };
        fieldObj.value = event.target.value;
        fieldObj.valid = checkValidity(event.target.value, fieldObj.validation);
        fieldObj.dirty = true;
        form[fieldName] = fieldObj;
        this.setState({ registrationForm: form }, () => {
            this.setState({ formValid: checkFormValidity(this.state.registrationForm) });
        });
    }

    render() {
        let inputProps = { fontFamily: `'Open Sans',sans-serif` };
        return (
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12 col-sm-12 col-md-5 col-lg-5">
                        <TextField
                            InputProps={{ style: inputProps }}
                            InputLabelProps={{ style: inputProps }}
                            FormHelperTextProps={{ style: { fontFamily: `'Open Sans',sans-serif` } }}
                            id="id" variant="filled" color="primary" label="Identity Number" fullWidth
                            helperText={checkInvalid('id', this.state.registrationForm) ? 'Id should be alphanumeric' : ' '}
                            error={checkInvalid('id', this.state.registrationForm)}
                            value={this.state.registrationForm.id.value}
                            onChange={(event) => this.inputChangeHandler(event, 'id')}
                        />
                    </div>
                    <div className="col-12 col-sm-12 col-md-5 col-lg-5">
                        <FormControl variant="filled" fullWidth>
                            <InputLabel style={inputProps}>Id Type</InputLabel>
                            <Select
                                style={inputProps}
                                labelId="id-type"
                                id="expense-category"
                                value={this.state.registrationForm.idType.value}
                                onChange={(event) => this.inputChangeHandler(event, 'idType')}>
                                <MenuItem style={inputProps} value='Aadhar'>Aadhar</MenuItem>
                                <MenuItem style={inputProps} value='PAN'>PAN</MenuItem>
                                <MenuItem style={inputProps} value='Driving License'>Driving License</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <div className="row mt-4 mt-md-2 mt-lg-2 justify-content-center">
                    <div className="col-12 col-sm-12 col-md-5 col-lg-5">
                        <TextField
                            InputProps={{ style: inputProps }}
                            InputLabelProps={{ style: inputProps }}
                            FormHelperTextProps={{ style: { fontFamily: `'Open Sans',sans-serif` } }}
                            id="first-name" variant="filled" color="primary" label="First Name" fullWidth
                            helperText={checkInvalid('firstName', this.state.registrationForm) ? 'Enter a valid First Name' : ' '}
                            error={checkInvalid('firstName', this.state.registrationForm)}
                            value={this.state.registrationForm.firstName.value}
                            onChange={(event) => this.inputChangeHandler(event, 'firstName')}
                        />
                    </div>
                    <div className="col-12 col-sm-12 col-md-5 col-lg-5">
                        <TextField
                            InputProps={{ style: inputProps }}
                            InputLabelProps={{ style: inputProps }}
                            FormHelperTextProps={{ style: { fontFamily: `'Open Sans',sans-serif` } }}
                            id="last-name" variant="filled" color="primary" label="Last Name" fullWidth
                            helperText={checkInvalid('lastName', this.state.registrationForm) ? 'Enter a valid Last Name' : ' '}
                            error={checkInvalid('lastName', this.state.registrationForm)}
                            value={this.state.registrationForm.lastName.value}
                            onChange={(event) => this.inputChangeHandler(event, 'lastName')}
                        />
                    </div>
                </div>
                <div className="row mt-1 mt-md-2 justify-content-center">
                    <div className="col-12 col-sm-12 col-md-5 col-lg-5">
                        <TextField
                            InputProps={{ style: inputProps }}
                            InputLabelProps={{ style: inputProps }}
                            FormHelperTextProps={{ style: { fontFamily: `'Open Sans',sans-serif` } }}
                            id="address-line-1" variant="filled" color="primary" label="Address Line 1" fullWidth
                            helperText={checkInvalid('addressLine1', this.state.registrationForm) ? 'Address Line 1 is mandatory' : ' '}
                            error={checkInvalid('addressLine1', this.state.registrationForm)}
                            value={this.state.registrationForm.addressLine1.value}
                            onChange={(event) => this.inputChangeHandler(event, 'addressLine1')}
                        />
                    </div>
                    <div className="col-12 col-sm-12 col-md-5 col-lg-5">
                        <TextField
                            InputProps={{ style: inputProps }}
                            InputLabelProps={{ style: inputProps }}
                            FormHelperTextProps={{ style: { fontFamily: `'Open Sans',sans-serif` } }}
                            id="address-line-2" variant="filled" color="primary" label="Address Line 2" fullWidth
                            value={this.state.registrationForm.addressLine2.value}
                            onChange={(event) => this.inputChangeHandler(event, 'addressLine2')}
                        />
                    </div>
                </div>
                <div className="row mt-4 mt-md-2 justify-content-center">
                    <div className="col-12 col-sm-12 col-md-5 col-lg-5">
                        <TextField
                            InputProps={{ style: inputProps }}
                            InputLabelProps={{ style: inputProps }}
                            FormHelperTextProps={{ style: { fontFamily: `'Open Sans',sans-serif` } }}
                            id="city" variant="filled" color="primary" label="City" fullWidth
                            helperText={checkInvalid('city', this.state.registrationForm) ? 'Enter a valid City' : ' '}
                            error={checkInvalid('city', this.state.registrationForm)}
                            value={this.state.registrationForm.city.value}
                            onChange={(event) => this.inputChangeHandler(event, 'city')}
                        />
                    </div>
                    <div className="col-12 col-sm-12 col-md-5 col-lg-5 justify-content-center">
                        <FormControl variant="filled" fullWidth>
                            <InputLabel style={inputProps}>State</InputLabel>
                            <Select
                                style={inputProps}
                                labelId="state-label"
                                id="state"
                                value={this.state.registrationForm.state.value}
                                onChange={(event) => this.inputChangeHandler(event, 'state')}>
                                <MenuItem style={inputProps} value='TN'>TamilNadu</MenuItem>
                                <MenuItem style={inputProps} value='MH'>Maharashtra</MenuItem>
                                <MenuItem style={inputProps} value='KL'>Kerala</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <div className="row mt-4 mt-md-2 justify-content-center">
                    <div className="col-12 col-sm-12 col-md-5 col-lg-5">
                        <TextField
                            InputProps={{ style: inputProps }}
                            InputLabelProps={{ style: inputProps }}
                            FormHelperTextProps={{ style: { fontFamily: `'Open Sans',sans-serif` } }}
                            id="zip-code" variant="filled" color="primary" label="Zip Code" fullWidth
                            helperText={checkInvalid('zip', this.state.registrationForm) ? 'Enter a valid Zip Code' : ' '}
                            error={checkInvalid('zip', this.state.registrationForm)}
                            value={this.state.registrationForm.zip.value}
                            onChange={(event) => this.inputChangeHandler(event, 'zip')}
                        />
                    </div>
                    <div className="col-12 col-sm-12 col-md-5 col-lg-5">
                        <TextField
                            InputProps={{ style: inputProps }}
                            InputLabelProps={{ style: inputProps }}
                            FormHelperTextProps={{ style: { fontFamily: `'Open Sans',sans-serif` } }}
                            id="phone-number" variant="filled" color="primary" label="Phone Number" fullWidth
                            helperText={checkInvalid('phoneNumber', this.state.registrationForm) ? 'Enter a valid Phone Number' : ' '}
                            error={checkInvalid('phoneNumber', this.state.registrationForm)}
                            value={this.state.registrationForm.phoneNumber.value}
                            onChange={(event) => this.inputChangeHandler(event, 'phoneNumber')}
                        />
                    </div>
                </div>
            </div>
        )
    }
}