import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import * as moment from 'moment';


const styles = theme => ({
    column: {
        flexBasis: '33.33%',
    },
    chip: {
        margin: '5px',
    }
});

let SystemColumn = props => {
    const { classes, sysAccess, removeAccess, userId } = props;
  
    const sysAccessList = sysAccess.map((system) => {
        const time = moment(system.accessDate).format('MM/DD/YYYY');
        return (
            <Chip
                label={`${system.name} ${time}`}
                className={classes.chip}
                onDelete={() => removeAccess(system._id, userId)}
                key={system._id}
            />
        );
    });

    const noAccess = <Chip label="No Access" />;
    
    return (
        <div className={classes.column}>
            {sysAccessList.length === 0 ? noAccess : sysAccessList}
        </div>
    );
};

SystemColumn.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SystemColumn);