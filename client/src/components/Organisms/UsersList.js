import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import SummaryPanel from '../Molecules/SummaryPanel';
import RoleColumn from '../Molecules/RoleColumn';
import SystemColumn from '../Molecules/SystemColumn';

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
    const { classes, userData } = props;
    console.log(userData[0]);

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
            <RoleColumn roles={user.roles}/>
            <SystemColumn sysAccess={user.sysAccess}/>
            <div className={classNames(classes.column, classes.helper)}>
                <Typography variant="caption">
                    Select your action
                            <br />
                    <br />
                    <Button variant="contained" size="small" color="primary">
                        Add Access
                            </Button>
                    <br />
                    <br />
                    <Button variant="contained" size="small">
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
                        checked={true}
                        //onChange={this.handleChange('checkedB')}
                        value="checkedB"
                        color="primary"
                    />
                }
            />
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
