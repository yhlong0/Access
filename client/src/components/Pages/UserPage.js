import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    icon: {
        verticalAlign: 'bottom',
        height: 20,
        width: 20,
    },
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
    link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
    chip: {
        margin: '5px',
    },
    roleChip: {
        margin: '5px',
        color: theme.palette.primary.main,
    }
});

class UserPage extends React.Component {
    state= {
        checkedB: true
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    render() {
        const{ classes } = this.props;

        return (
            <div className={classes.root}>
                <ExpansionPanel >
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <div className={classes.column}>
                            <Typography className={classes.heading}>Hailong Yang</Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.secondaryHeading}>Join Date: 06/01/2018</Typography>
                        </div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.details}>
                        <div className={classes.column}>
                            <Chip label="System Admin 06/01/2018" className={classes.roleChip} onDelete={() => { }} />
                        </div>
                        <div className={classes.column}>
                            <Chip label="Domain Account 06/01/2018" className={classes.chip} onDelete={() => { }} />
                            <Chip label="Phone 06/01/2018" className={classes.chip} onDelete={() => { }} />
                            <Chip label="Internal Site 06/01/2018" className={classes.chip} onDelete={() => { }} />
                            <Chip label="Domain Account 06/01/2018" className={classes.chip} onDelete={() => { }} />
                            <Chip label="Domain Account 06/01/2018" className={classes.chip} onDelete={() => { }} />
                            <Chip label="Domain Account 06/01/2018" className={classes.chip} onDelete={() => { }} />
                            <Chip label="Domain Account 06/01/2018" className={classes.chip} onDelete={() => { }} />
                        </div>
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
                                    checked={this.state.checkedB}
                                    onChange={this.handleChange('checkedB')}
                                    value="checkedB"
                                    color="primary"
                                />
                            }
                        />
                    </ExpansionPanelActions>
                </ExpansionPanel>
            </div>
        );
    }
}

UserPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserPage);