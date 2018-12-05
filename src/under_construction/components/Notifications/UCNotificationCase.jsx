import React, {Component} from 'react';
import PropTypes from "prop-types";
// @material-ui/icons
// core components
import GridItem from "components/Grid/GridItem.jsx";
import Snackbar from "components/Snackbar/Snackbar.jsx";

class UCNotificationCase extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: this.props.open
        };
    }

    // to stop the warning of calling setState of unmounted component
    componentWillUnmount() {
        let id = window.setTimeout(null, 0);
        while (id--) {
            window.clearTimeout(id);
        }
    }

    // componentDidMount(props){
    //    setTimeout(() => {
    //        this.setState({open: false})
    //    },props.show)
    // }

    render() {
        const place = "tr";
        const {
            color,
            message,
            open,
            closeNotification
        } = this.props;
        return (
            <div>
                <GridItem xs={8} sm={8} md={3}>
                    <Snackbar
                        place={place}
                        color={color}
                        message={message}
                        open={open}
                        closeNotification={closeNotification}
                        close
                    />
                </GridItem>
            </div>
        );
    }
}

UCNotificationCase.propTypes = {
    classes: PropTypes.object,
    place: PropTypes.string,
    color: PropTypes.string,
    message: PropTypes.string,
    open: PropTypes.bool,
};

export default UCNotificationCase;
