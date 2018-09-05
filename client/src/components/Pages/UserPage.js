import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import UsersList from '../Organisms/UsersList';
import NewUserTextField from '../Molecules/NewUserTextField';
import AccessDialog from '../Organisms/AccessDialog';
import { connect } from 'react-redux';
import * as userActions from '../../actions/userActions';


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

    componentDidMount() {
        this.props.dispatch(userActions.fetchUsers());
    }

    createUser = (user) => {
        this.props.dispatch(userActions.createUser(user));
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    render() {
        const{ classes } = this.props;
        console.log(this.props.users);
        return (
            <div className={classes.root}>
                <AccessDialog />
                <NewUserTextField create={this.createUser} />
                <UsersList userData={this.props.users} />
            </div>
        );
    }
}

UserPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
    return {
        users: state.user.user,
        fetching: state.user.fetching,
    };
}

const StyledUserPage = withStyles(styles)(UserPage);

export default connect(mapStateToProps)(StyledUserPage);