import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    column: {
        flexBasis: '33.33%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
});

function PanelSummary(props) {
    return (
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <div className={classes.column}>
                <Typography className={classes.heading}>Hailong Yang</Typography>
            </div>
            <div className={classes.column}>
                <Typography className={classes.secondaryHeading}>Join Date: 06/01/2018</Typography>
            </div>
        </ExpansionPanelSummary>
    );
}

export default withStyles(styles)(PanelSummary);



