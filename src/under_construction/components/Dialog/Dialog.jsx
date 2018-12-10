import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogRaw from "under_construction/components/Dialog/ConfirmationDialogRaw.jsx"

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    paper: {
        width: '80%',
        maxHeight: 435,
    },
});

class ConfirmationDialog extends React.Component {
    state = {
        dialogIsOpen: this.props.open,
        value: 'Dione',
    };

    handleClickListItem = () => {
        this.setState({dialogIsOpen: true});
    };

    handleClose = value => {
        this.setState({value, dialogIsOpen: false});
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <DialogRaw
                    classes={{
                        paper: classes.paper,
                    }}
                    open={this.state.dialogIsOpen}
                    onClose={this.handleClose}
                    value={this.state.value}
                />
            </div>
        );
    }
}

ConfirmationDialog.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ConfirmationDialog);