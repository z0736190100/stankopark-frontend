import React, {Component} from "react";
import Experimental from "views/Experimental/Experimental.jsx";
//import { connect } from "react-redux";
//import * as actions from "store/actions";

//TODO uncontrolled CustomForm component + redux-form
class ExperimentalClass extends Component {
    state = {
        mockSelectVal: "one",
        electric: false,
        pneumatic: false,
        hydraulic: false,
        manual: true

    };

    selectOC = event => {
        this.setState({
            mockSelectVal: event.target.value
        });
    };

    switchOnChangeHandler = (name) => {
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
            console.log(this.state);
        }
    };


    render() {
        return (
            <Experimental selectOC={this.selectOC} iii={this.state.mockSelectVal}
                          switchStateHandler={this.switchOnChangeHandler} switchState={this.state}/>
        );
    }
}

// function mapStateToProps({ test }) {
//   return { test };
// }

export default ExperimentalClass;
