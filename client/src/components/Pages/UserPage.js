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
    switchNewUserView,
    switchFullUsersView 
} from '../../redux/actions/ui.actions';
import { 
    fetchUsers,
    createUser,
    changeStatus, 
    removeRole,
    removeAccess,
    deleteUser
} from '../../redux/actions/users.actions';
import {
    openDialog,
    closeDialog,
    updateSearch,
    checkedItem,
    addItem
} from '../../redux/actions/dialog.action';

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
        this.props.dispatch(fetchUsers(this.props.showAllUsers));
        this.props.dispatch(fetchSystems());
        this.props.dispatch(fetchRoles());
    }

    createUser = (user) => {
        this.props.dispatch(createUser(user, this.props.showAllUsers));
    }

    openDialog = (userId, dialog) => {
        this.props.dispatch(openDialog(userId, dialog, this.props.systems, this.props.roles));
    }

    checkedItem = (itemId) => {
        this.props.dispatch(checkedItem(itemId));
    }

    addItem = () => {
        this.props.dispatch(addItem(this.props.dialogData));
    }

    removeAccess = (systemId, userId) => {
        this.props.dispatch(removeAccess(systemId, userId));
    }

    removeRole = (roleId, userId) => {
        this.props.dispatch(removeRole(roleId, userId));
    }

    changeStatus = (userId, userStatus) => {
        this.props.dispatch(changeStatus(userId, userStatus, this.props.showAllUsers));
    }

    closeDialog = () => {
        this.props.dispatch(closeDialog());
    }

    updateSearch = (search) => {
        this.props.dispatch(updateSearch(search));
    }

    switchNewUserView = () => {
        this.props.dispatch(switchNewUserView());
    }

    switchFullUsersView = () => {
        this.props.dispatch(switchFullUsersView(this.props.showAllUsers))
    }

    deleteUser = (userId) => {
        this.props.dispatch(deleteUser(userId));
    }

    render() {
        const { 
            classes, 
            users, 
            dialogOpenStatus, 
            renderList, 
            loading,
            search,
            newUserView,
        } = this.props;
        
        return (
            <div className={classes.root}>
                {loading && <LinearProgress /> }
                <AddingDialog 
                    dialogOpenStatus={dialogOpenStatus}
                    closeDialog={this.closeDialog}
                    checkedItem={this.checkedItem}
                    listItems={renderList}
                    search={search}
                    addItem={this.addItem}
                    updateSearch={this.updateSearch}
                />        
                <AddIconButton switchNewUserView={this.switchNewUserView} />
                <LabeledSwitch showAllUsers={this.switchFullUsersView} />
                {newUserView &&
                    <NewUserTextField create={this.createUser} />
                }
                { users && 
                    <UsersList
                        userData={users}
                        openDialog={this.openDialog}
                        removeAccess={this.removeAccess}
                        removeRole={this.removeRole}
                        changeStatus={this.changeStatus}
                        deleteUser={this.deleteUser}
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
        dialogOpenStatus: state.uiReducer.modalView,
        systems: state.systemsReducer.systems,
        roles: state.rolesReducer.roles,
        dialogData: state.dialogReducer,
        search: state.dialogReducer.search,
        renderList: state.dialogReducer.renderList,
        newUserView: state.uiReducer.newUserView,
        showAllUsers: state.uiReducer.showAllUsers
    };
}

const StyledUserPage = withStyles(styles)(UserPage);

export default connect(mapStateToProps)(StyledUserPage);