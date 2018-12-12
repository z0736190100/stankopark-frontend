import React, {Component} from 'react';
import {connect} from "react-redux";
import * as actions from "store/actions";
import _ from "lodash";
// custom components
import Snackbar from "components/Snackbar/Snackbar";

class Notiferatu extends Component {

        state = {
            open: true
        };

        onNotificationRecieved = () => {

        };

        renderNotifications = () => {
            const notif = this.props.notifications;
            if (notif !== undefined) {
                const notifArr = [];
                _.map(notif, (item, key) => {
                    console.log({...item}, key);
                    return notifArr.push(
                        <Snackbar
                            hideAfter={7000}
                            place={"tr"}
                            key={key}
                            open={item.open}
                            message={item.message}
                            color={item.color}
                            closeNotification={() => {
                                this.setState({
                                    open: false
                                });
                                this.props.clearNotification();
                            }}
                            close
                        />
                    )
                });
                return notifArr;
            }
        };

        render() {
            return (
                <div>
                    {this.props.notifications ? this.renderNotifications() : null}
                </div>
            );
        }
    }

const mapStateToProps = ({notifications}) => {
    return {notifications}
};

export default connect(mapStateToProps, actions)(Notiferatu);
