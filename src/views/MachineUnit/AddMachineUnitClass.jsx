import React, {Component} from "react";
import AddMachineUnit from "views/MachineUnit/AddMachineUnit.jsx";
import {connect} from "react-redux";
import * as actions from "store/actions";

import Snackbar from "components/Snackbar/Snackbar.jsx";
import Notiferatu from "../../under_construction/components/Notifications/Notiferatu";

//TODO uncontrolled CustomForm component + redux-form
class AddMachineUnitClass extends Component {

    state = {
        mockSelectVal: "one",
        electric: false,
        pneumatic: false,
        hydraulic: false,
        manual: true,
        tableData: [],
        open: false,
        message: "Whoa!"
    };

    componentDidUpdate() {
        if (this.props.form.addMachineUnitForm !== undefined)
            console.log(this.props.form.addMachineUnitForm);
    }

    tableHelper() {
        if (this.props.form.addMachineUnitForm !== undefined) {
            let values = this.props.form.addMachineUnitForm.values;
            this.setState({
                tableData: this.state.tableData.push([])
            })
        }
    }

    selectOC = event => {
        this.setState({
            mockSelectVal: event.target.value
        });
    };

    switchInputOnChange = (name) => {
        if (name === "manual") {
            this.setState({
                electric: false,
                pneumatic: false,
                hydraulic: false,
                [name]: !this.state[name],
                open: true,
                message: "Manual"
            });
        } else {
            this.setState({
                [name]: !this.state[name],
                manual: false
            });
            console.log(this.state);
        }
    };

    render() {
        return (
            <div>
                    <AddMachineUnit selectOC={this.selectOC}
                                    iii={this.state.mockSelectVal}
                                    switchStateHandler={this.switchInputOnChange}
                                    switchState={this.state}
                                    tableData={this.state.tableData}
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
