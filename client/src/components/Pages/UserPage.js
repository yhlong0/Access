import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { connect } from 'react-redux';

import UsersList from '../Organisms/UsersList';
import AddingDialog from '../Organisms/Dialog';
import NewUserTextField from '../Molecules/NewUserTextField';

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

    openDialog = (dialog) => {
        this.props.dispatch(userActions.openDialog(dialog, this.props.systems, this.props.roles));
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
        this.props.dispatch(userActions.changeStatus(userId));
    }

    closeDialog = () => {
        this.props.dispatch(userActions.closeDialog());
    }

    updateSearch = (search) => {
        this.props.dispatch(userActions.updateSearch(search));
    }

    render() {
        const { 
            classes, 
            users, 
            dialogOpenStatus, 
            renderList, 
            fetching,
            search,
        } = this.props;
        
        return (
            <div className={classes.root}>
                {fetching &&
                    <LinearProgress />
                }
                <AddingDialog 
                    dialogOpenStatus={dialogOpenStatus}
                    closeDialog={this.closeDialog}
                    checkedItem={this.clickedAccess}
                    listItems={renderList}
                    search={search}
                    addItem={this.addAccess}
                    updateSearch={this.updateSearch}
                />
                <NewUserTextField create={this.createUser} />
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
    };
}

const StyledUserPage = withStyles(styles)(UserPage);

export default connect(mapStateToProps)(StyledUserPage);