import React, { Fragment } from 'react';
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
    const { classes, roles } = props;

    const rolesList = roles.map((role) => {
        return (
            <Chip 
                label={role.name} 
                className={classes.roleChip} 
                onDelete={() => { }} 
                key={role._id}
            />
        );
    });

    return (
        <div className={classes.column} >
            {rolesList}
        </div>
    );
};

RoleColumn.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RoleColumn);