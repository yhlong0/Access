import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';


const styles = theme => ({
    column: {
        flexBasis: '33.33%',
    },
    chip: {
        margin: '5px',
    }
});

let SystemColumn = props => {
    const { classes } = props;

    return (
        <div className={classes.column}>
            <Chip label="Domain Account 06/01/2018" className={classes.chip} onDelete={() => { }} />
            <Chip label="Phone 06/01/2018" className={classes.chip} onDelete={() => { }} />
            <Chip label="Internal Site 06/01/2018" className={classes.chip} onDelete={() => { }} />
            <Chip label="Domain Account 06/01/2018" className={classes.chip} onDelete={() => { }} />
            <Chip label="Domain Account 06/01/2018" className={classes.chip} onDelete={() => { }} />
            <Chip label="Domain Account 06/01/2018" className={classes.chip} onDelete={() => { }} />
        </div>
    );
};

SystemColumn.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SystemColumn);