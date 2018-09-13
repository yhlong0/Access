import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
    fab: {
        margin: theme.spacing.unit * 2,
    },
});

const AddIconButton = (props) => {
    const { classes, changeRenderNewUser } = props;
    return(
        <Tooltip title="Add">
            <Button 
                variant="fab" 
                color="primary" 
                aria-label="Add" 
                className={classes.fab}
                onClick={changeRenderNewUser}
            >
                <AddIcon />
            </Button>
        </Tooltip>
    );
}

AddIconButton.PropTypes = {
    classes: PropTypes.object.isRequired,
    changeRenderNewUser: PropTypes.func.isRequired,
};

export default withStyles(styles)(AddIconButton);