import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

import UsersList from '../Organisms/UsersList';
import AddingDialog from '../Organisms/Dialog';
import NewUserTextField from '../Molecules/NewUserTextField';
import LabeledSwitch from '../Molecules/LabeledSwitch';
import AddIconButton from '../Molecules/AddIconButton';

import { connect } from 'react-redux';
import { fetchSystems } from '../../redux/actions/systems.actions';
import { fetchRoles } from '../../redux/actions/roles.actions';
import { 
    fetchUsers,
    createUser, 
} from '../../redux/actions/users.actions';
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
    },
    fab: {
        margin: theme.spacing.unit * 2,
    },
});

class UserPage extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchUsers());
        this.props.dispatch(fetchSystems());
        this.props.dispatch(fetchRoles());
    }

    componentDidUpdate(prevProps) {
        if (this.props.users !== prevProps.users) {
            this.props.dispatch(fetchUsers());
        }
    }

    createUser = (user) => {
        this.props.dispatch(createUser(user));
    }

    openDialog = (userId, dialog) => {
        this.props.dispatch(userActions.openDialog(userId, dialog, this.props.systems, this.props.roles));
    }

    clickedAccess = (accessId) => {
        this.props.dispatch(userActions.clickedAccess(accessId));
    }

    addAccess = () => {
        this.props.dispatch(userActions.addAccess(this.props.accessData));
    }

    removeAccess = (systemId, userId) => {
        this.props.dispatch(userActions.removeAccess(systemId, userId));
    }

    removeRole = (roleId, userId) => {
        this.props.dispatch(userActions.removeRole(roleId, userId));
    }

    changeStatus = (userId) => {
        this.props.dispatch(userActions.changeStatus(userId, this.props.showAllUsers));
    }

    closeDialog = () => {
        this.props.dispatch(userActions.closeDialog());
    }

    updateSearch = (search) => {
        this.props.dispatch(userActions.updateSearch(search));
    }

    changeRenderNewUser = () => {
        this.props.dispatch(userActions.changeRenderNewUser());
    }

    fetchUsers = () => {
        this.props.dispatch(userActions.showAllUsers(this.props.showAllUsers));
    }

    render() {
        const { 
            classes, 
            users, 
            dialogOpenStatus, 
            renderList, 
            loading,
            search,
            renderNewUser,
        } = this.props;
        
        return (
            <div className={classes.root}>
                {loading && <LinearProgress /> }
                <AddingDialog 
                    dialogOpenStatus={dialogOpenStatus}
                    closeDialog={this.closeDialog}
                    checkedItem={this.clickedAccess}
                    listItems={renderList}
                    search={search}
                    addItem={this.addAccess}
                    updateSearch={this.updateSearch}
                />        
                <AddIconButton changeRenderNewUser={this.changeRenderNewUser} />
                <LabeledSwitch showAllUsers={this.fetchUsers} />
                {renderNewUser &&
                    <NewUserTextField create={this.createUser} />
                }
                { users && 
                    <UsersList
                        userData={users}
                        openDialog={this.openDialog}
                        removeAccess={this.removeAccess}
                        removeRole={this.removeRole}
                        changeStatus={this.changeStatus}
                    />
                }

            </div>
        );
    }
}

UserPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
    return {
        users: state.usersReducer.users,
        loading: state.uiReducer.loading,
        dialogOpenStatus: false,
        systems: state.systemsReducer.systems,
        roles: state.rolesReducer.roles,
        accessData: {}, //state.user.accessData,
        search: '', //state.user.search,
        renderList: [], //state.user.renderList,
        renderNewUser: state.usersReducer.renderNewUser,
        showAllUsers: true, //state.user.showAllUsers,
    };
}

const StyledUserPage = withStyles(styles)(UserPage);

export default connect(mapStateToProps)(StyledUserPage);