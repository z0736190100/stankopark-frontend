import React, {Component} from "react";
import _ from "lodash";
import AddMachineUnitForm from "views/MachineUnit/AddMachineUnitForm.jsx";
import {connect} from "react-redux";
import * as actions from "store/actions";
import ConfirmationDialogRaw from "under_construction/components/Dialog/ConfirmationDialogRaw";
import Button from '@material-ui/core/Button';
import Table from "../../components/Table/Table";
// assets
import ADD_MACHINE_UNIT_FORM_FIELD_PROPS from "variables/addMachineUnitFormFields.js";

//TODO uncontrolled CustomForm component + redux-form
// KUNG-FUSION: set redux-form values to null after successful saving OR what? Redirection or smth else?
class AddMachineUnitClass extends Component {

    classes = this.props.classes;

    state = {
        dialogIsOpen: false,
        electric: false,
        pneumatic: false,
        hydraulic: false,
        thermo: false,
        confirmationDialogContent: []
    };

    dialogContentHelper() {
        if (this.props.form.add_machine !== undefined) {
            let fvalues = this.props.form.add_machine.values;
            if (fvalues === undefined) return null;
            return _.map(ADD_MACHINE_UNIT_FORM_FIELD_PROPS, (section) => {
                this.dialogTableHelper(section, fvalues);
            });
        }
        return null;
    }

    dialogTableHelper(section, values) {
        let tableHead = [section.title, ""];
        let tableData = [];
        _.map(section.fields, item => {
            if (values[item.name] !== undefined) {
                let tableRow = [item.labelText, values[item.name]];
                tableData.push(tableRow);
            }
        });
        this.setState(prevState => {
            let temp = prevState.confirmationDialogContent;
            temp.push(
                <Table
                    key={tableHead}
                    tableHeaderColor="primary"
                    tableHead={tableHead}
                    tableData={tableData}
                />);
            return {
                confirmationDialogContent: temp
            }
        });
    }

    switchInputOnChange = (event, name) => {

        this.setState(state => {
            if (name === "thermo" && !state.electric)
                return {
                    electric: true,
                    [name]: !state[name]

                };
            return {
                [name]: !this.state[name]
            };
        });
    };

    showDialog = () => {
        this.setState({
            confirmationDialogContent: []
        });
        this.dialogContentHelper();
        this.setState({dialogIsOpen: true});
    };

    cancelDialog = () => {
        this.setState({dialogIsOpen: false});
    };

    saveToDB = (values) => {
        this.props.saveMachineUnit(values);

    };

    render() {
        return (
            <div>
                <AddMachineUnitForm switchStateHandler={this.switchInputOnChange}
                                    switchState={this.state}
                                    showDialog={this.showDialog}
                                    saveToDB = {this.saveToDB}
                />
                <ConfirmationDialogRaw
                    open={this.state.dialogIsOpen}
                    onClose={null}
                    dialogcontent={this.state.confirmationDialogContent}
                    dialogactions={
                        <div>
                            <Button onClick={this.cancelDialog} color="primary">
                                Cancel
                            </Button>
                            <Button onClick={this.cancelDialog} color="primary">
                                Ok
                            </Button>
                        </div>
                    }
                />
            </div>
        );
    }
}

function mapStateToProps({form}) {
    return {
        form
    };
}

export default connect(mapStateToProps, actions)(AddMachineUnitClass);
