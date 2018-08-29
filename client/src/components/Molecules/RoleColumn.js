import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';


const styles = theme => ({
    column: {
        flexBasis: '33.33%',
    },
    roleChip: {
        margin: '5px',
        color: theme.palette.primary.main,
    }
});

let RoleColumn = props => {
    const { classes } = props;

    return (
        <div className={classes.column}>
            <Chip label="System Admin 06/01/2018" className={classes.roleChip} onDelete={() => { }} />
        </div>
    );
};

RoleColumn.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RoleColumn);