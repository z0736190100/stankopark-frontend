import React, {Component} from "react";
import AddMachineUnit from "views/MachineUnit/AddMachineUnit.jsx";
import {connect} from "react-redux";
import * as actions from "store/actions";

//TODO uncontrolled CustomForm component + redux-form
class AddMachineUnitClass extends Component {

    state = {
        electric: false,
        pneumatic: false,
        hydraulic: false,
        manual: true,
        tableData: [],
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

    switchInputOnChange = (event, name) => {
        if (name === "manual") {
            this.setState({
                electric: false,
                pneumatic: false,
                hydraulic: false,
                [name]: !this.state[name]
            });
        } else {
            this.setState({
                [name]: !this.state[name],
                manual: false
            });
            console.log(event.target);
        }
    };

    formOnChange = () => {
        console.log(this.props.form.add_machine);
    };

    render() {
        return (
            <div>
                <AddMachineUnit switchStateHandler={this.switchInputOnChange}
                                switchState={this.state}
                                tableData={this.state.tableData}
                                formOnChange={this.formOnChange}
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
