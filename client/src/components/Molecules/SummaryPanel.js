import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import * as moment from 'moment';


const styles = theme => ({
    heading: {
        fontSize: theme.typography.pxToRem(15),
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    column: {
        flexBasis: '33.33%',
    },

});

let SummaryPanel = props => {
    const { classes, lastname, firstname, joinDate } = props;
    const time = moment(joinDate).format('MM/DD/YYYY');
    //console.log(joinDate);
    return (
        <Fragment>         
            <div className={classes.column}>
                <Typography className={classes.heading}>
                    {firstname} {lastname}
                </Typography>
            </div>
            <div className={classes.column}>
                <Typography className={classes.secondaryHeading}>Join Date: {time}</Typography>
            </div>
        </Fragment>
    );
};

SummaryPanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SummaryPanel);