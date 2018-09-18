import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { connect } from 'react-redux';

import UsersList from '../Organisms/UsersList';
import AddingDialog from '../Organisms/Dialog';
import NewUserTextField from '../Molecules/NewUserTextField';
import LabeledSwitch from '../Molecules/LabeledSwitch';
import AddIconButton from '../Molecules/AddIconButton';

import * as userActions from '../../actions/userActions';
import * as systemActions from '../../actions/systemActions';
import * as roleActions from '../../actions/roleActions';
//test branch.
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
        this.props.dispatch(userActions.showAllUsers(this.props.showAllUsers));
        this.props.dispatch(systemActions.fetchSystems());
        this.props.dispatch(roleActions.fetchRoles());
    }

    createUser = (user) => {
        this.props.dispatch(userActions.createUser(user));
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
            fetching,
            search,
            renderNewUser,
        } = this.props;
        
        return (
            <div className={classes.root}>
                { fetching && <LinearProgress /> }
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
                <UsersList 
                    userData={users} 
                    openDialog={this.openDialog}
                    removeAccess={this.removeAccess}
                    removeRole={this.removeRole}
                    changeStatus={this.changeStatus}
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
        roles: state.role.role,
        accessData: state.user.accessData,
        search: state.user.search,
        renderList: state.user.renderList,
        renderNewUser: state.user.renderNewUser,
        showAllUsers: state.user.showAllUsers,
    };
}

const StyledUserPage = withStyles(styles)(UserPage);

export default connect(mapStateToProps)(StyledUserPage);