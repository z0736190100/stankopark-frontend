import React, {Component} from 'react';
// @material-ui/icons
// core components
import GridItem from "components/Grid/GridItem.jsx";
import Snackbar from "components/Snackbar/Snackbar.jsx";

class UCNotification extends Component {

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
            open
        } = this.props;
        return (
            <div>
                <GridItem xs={12} sm={12} md={3}>
                    <Snackbar
                        place={place}
                        color={color}
                        message={message}
                        open={open}
                        closeNotification={() => this.setState({open: false})}
                        close
                    />
                </GridItem>
            </div>
        );
    }
}

UCNotification.propTypes = {};

export default UCNotification;
