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

    const noRole = <Chip label="No Role" />;

    return (
        <div className={classes.column} >
            {rolesList.length === 0 ? noRole : rolesList}
        </div>
    );
};

RoleColumn.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RoleColumn);