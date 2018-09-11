import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import classNames from 'classnames';
import * as moment from 'moment';

const styles = theme => ({
    column: {
        flexBasis: '33.33%',
    },
    chip: {
        margin: '5px',
    },
    roleChip: {
        color: theme.palette.primary.main,
    }
});

let Column = props => {
    const { 
        classes, 
        listItems, 
        removeItem, 
        userId, 
        emptyLabel,
        chipColor, 
    } = props;

    const List = listItems.map((item) => {
        const time = moment(item.accessDate).format('MM/DD/YYYY');
        return (
            <Chip
                label={`${item.name} ${time}`}
                className={
                    classNames(
                        classes.chip, 
                        {[classes.roleChip]: chipColor === 'blue'}
                    )
                }
                onDelete={() => removeItem(item._id, userId)}
                key={item._id}
            />
        );
    });

    const empty = <Chip 
                        label={emptyLabel} 
                        className={
                            classNames(
                                classes.chip, 
                                { [classes.roleChip]: chipColor === 'blue' }
                            )
                        }
                  />;

    return (
        <div className={classes.column}>
            {List.length === 0 ? empty : List}
        </div>
    );
};

Column.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Column);