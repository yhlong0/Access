import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import { TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    TextField: {

    },
})

let ListItems = props => {
    const { classes } = props;

    return (
        <div>
            <ListItem>
                <TextField 
                    placeholder="Search a country (start with a)"
                    fullWidth
                    margin="normal"
                    className={classes.textField}
                />
            </ListItem>
            <ListItem>
                <Checkbox value="Something" /> 
                <ListItemText primary="test" />
            </ListItem>
            <ListItem>
                <Checkbox value="Something" /> test1
            </ListItem>
        </div>
    );
}


export default withStyles(styles)(ListItems);