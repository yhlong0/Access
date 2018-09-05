import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

const styles = {
    list: {
        maxHeight: 300,
    },
}

class AccessDialog extends React.Component {

    render() {
        const { classes, dialogOpenStatus, openDialog } = this.props;

        return (
            <div>
                <Dialog
                    open={dialogOpenStatus}
                    onClose={openDialog}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Add Access</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To add access for this user, please search the system here. 
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="System Name"
                            fullWidth
                        />
                        <List className={classes.list}>
                            <ListItem>
                                <Checkbox value="Something" />
                                <ListItemText primary="test" />
                            </ListItem>
                            <ListItem>
                                <Checkbox value="Something" /> 
                                <ListItemText primary="test2" />
                            </ListItem>
                            <ListItem>
                                <Checkbox value="Something" />
                                <ListItemText primary="test3" />
                            </ListItem>
                            <ListItem>
                                <Checkbox value="Something" />
                                <ListItemText primary="test4" />
                            </ListItem>
                            <ListItem>
                                <Checkbox value="Something" />
                                <ListItemText primary="test5" />
                            </ListItem>
                            <ListItem>
                                <Checkbox value="Something" />
                                <ListItemText primary="test6" />
                            </ListItem>
                            <ListItem>
                                <Checkbox value="Something" />
                                <ListItemText primary="test6" />
                            </ListItem>
                        </List>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={openDialog} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={openDialog} color="primary">
                            Add
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

AccessDialog.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AccessDialog);