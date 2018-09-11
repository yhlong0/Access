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

//https://stackoverflow.com/questions/40868189/how-to-create-a-dynamic-prop-name-in-react
const styles = {
    list: {
        maxHeight: 300,
    },
}

class Dialog extends React.Component {
    state = {
        search: ''
    };

    updateSearch = event => {
        this.props.updateSearch(event.target.value);
    }

    render() {
        const {
            classes,
            dialogOpenStatus,
            closeDialog,
            clickedAccess,
            listItems,
            addAccess,
            search,
        } = this.props;

        let filteredList = listItems.filter(
            (item) => {
                return item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
            }
        );

        const listComponents = filteredList.map(item => {
            return (
                <ListItem key={item._id}>
                    <Checkbox
                        value={item._id}
                        onChange={() => clickedAccess(item._id)}
                    />
                    <ListItemText primary={item.name} />
                </ListItem>
            );
        });

        return(
            <div>
                <Dialog
                    open={dialogOpenStatus}
                    onClose={closeDialog}
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
                            onChange={this.updateSearch}
                        />
                        <List className={classes.list}>
                            {listComponents}
                        </List>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={closeDialog} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={addAccess} color="primary">
                            Add
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    };
}

AccessDialog.propTypes = {
    classes: PropTypes.object.isRequired,
    dialogOpenStatus: PropTypes.bool.isRequired,
    closeDialog: PropTypes.func.isRequired,
};

export default withStyles(styles)(Dialog);