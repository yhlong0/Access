import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


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
    const { classes } = props;

    return (
        <Fragment>         
            <div className={classes.column}>
                <Typography className={classes.heading}>Hailong Yang</Typography>
            </div>
            <div className={classes.column}>
                <Typography className={classes.secondaryHeading}>Join Date: 06/01/2018</Typography>
            </div>
        </Fragment>
    );
};

SummaryPanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SummaryPanel);