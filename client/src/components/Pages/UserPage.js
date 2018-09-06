import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import UsersList from '../Organisms/UsersList';
import NewUserTextField from '../Molecules/NewUserTextField';
import AccessDialog from '../Organisms/AccessDialog';
import { connect } from 'react-redux';
import * as userActions from '../../actions/userActions';
import * as systemActions from '../../actions/systemActions'


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
        this.props.dispatch(systemActions.fetchSystems());
    }

    createUser = (user) => {
        this.props.dispatch(userActions.createUser(user));
    }

    openDialog = (userId) => {
        this.props.dispatch(userActions.openDialog(userId));
    }

    clickedAccess = (accessId) => {
        this.props.dispatch(userActions.clickedAccess(accessId));
    }

    addAccess = () => {
        this.props.dispatch(userActions.addAccess(this.props.accessData));
    }

    closeDialog = () => {
        this.props.dispatch(userActions.closeDialog());
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    render() {
        const { 
            classes, 
            users, 
            dialogOpenStatus, 
            systems, 
            fetching,
        } = this.props;

        return (
            <div className={classes.root}>
                {fetching &&
                    <LinearProgress />
                }
                <AccessDialog 
                    dialogOpenStatus={dialogOpenStatus} 
                    closeDialog={this.closeDialog}
                    clickedAccess={this.clickedAccess}
                    systems={systems}
                    addAccess={this.addAccess}
                />
                <NewUserTextField create={this.createUser} />
                <UsersList 
                    userData={users} 
                    openDialog={this.openDialog}
                />
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
        dialogOpenStatus: state.user.dialogOpenStatus,
        systems: state.system.system,
        accessData: state.user.accessData,
    };
}

const StyledUserPage = withStyles(styles)(UserPage);

export default connect(mapStateToProps)(StyledUserPage);