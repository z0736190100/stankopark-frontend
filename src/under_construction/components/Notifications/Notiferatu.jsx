import React, {Component} from 'react';
import {connect} from "react-redux";
import * as actions from "store/actions";
import _ from "lodash";
import UCNotificationCase from "under_construction/components/Notifications/UCNotificationCase.jsx";

class Notiferatu extends Component {

    state = {
        open: true
    };

    renderNotifications = () => {
        const notif = this.props.notifications;
        if (notif !== undefined) {
            const notifArr = [];
            _.map(notif, (item, key) => {
                console.log({...item}, key);
                return notifArr.push(
                    <UCNotificationCase
                        place={"tr"}
                        key={item.message}
                        open={this.state.open}
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
            console.log(notifArr);
            return notifArr;
        }
    };

    render() {
        return (
            <div>
                {this.props.notifications ? this.renderNotifications() : null}
                <div>{this.props.children}</div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        notifications: state.notifications
    }
};

Notiferatu.propTypes = {};

export default connect(mapStateToProps, actions)(Notiferatu);
