import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';

import DeleteIcon from '@material-ui/icons/Delete';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import SummaryPanel from '../Molecules/SummaryPanel';
import Column from '../Molecules/Column';

const styles = theme => ({
    details: {
        alignItems: 'center',
    },
    column: {
        flexBasis: '33.33%',
    },
    helper: {
        borderLeft: `2px solid ${theme.palette.divider}`,
        padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    },
    panel: {
        margin: '10px',
    }
});

const UsersList = props => {
    const { 
        classes, 
        userData, 
        openDialog, 
        removeAccess,
        removeRole,
        changeStatus, 
        deleteUser
    } = props;

    const panelList = userData.map((user) => { 
        return (
        <ExpansionPanel key={user._id} >
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <SummaryPanel 
                lastname={user.lastname}
                firstname={user.firstname}
                joinDate={user.joinDate}
            />
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>       
            <Column
                userId={user._id}
                listItems={user.roles}
                removeItem={removeRole}
                emptyLabel="No Role"
                chipColor="blue"
            />
            <div className={classNames(classes.column, classes.helper)}>
                <Column 
                    userId={user._id}
                    listItems={user.sysAccess}
                    removeItem={removeAccess}
                    emptyLabel="No Access"
                />
            </div>
            <div className={classNames(classes.column, classes.helper)}>
                <Typography variant="caption">
                    Select your action
                    <br />
                    <br />
                    <Button 
                        variant="contained" 
                        size="small" 
                        color="primary"
                        onClick={() => openDialog(user._id, 'access')}
                    >
                        Add Access
                    </Button>
                    <br />
                    <br />
                    <Button 
                        variant="contained" 
                        size="small"
                        onClick={() => openDialog(user._id, 'role')}
                    >
                        Add Role
                    </Button>
                </Typography>
            </div>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
            <FormControlLabel
                label="Status"
                labelPlacement="start"
                control={
                    <Switch
                        checked={user.status}
                        onChange={() => changeStatus(user._id, user.status)}
                        value="checkedB"
                        color="primary"
                    />
                }
            />
            <Button 
                variant="contained" 
                color="secondary" 
                className={classes.button}
                onClick={() => deleteUser(user._id)}
            >
                Delete
                <DeleteIcon className={classes.rightIcon} />
            </Button>
        </ExpansionPanelActions>
    </ExpansionPanel> 
    
    );});

    return (
        <Fragment>
            {panelList}
        </Fragment>
    );
};

UsersList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UsersList);
