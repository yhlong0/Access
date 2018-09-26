import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import TextField from '../Organisms/TextField';
import TableView from '../Organisms/TableView';

import { connect } from 'react-redux';
import { selectItem } from '../../redux/actions/ui.actions';
import {
    ROLES,
    fetchRoles,
    createRole,
    deleteRole
} from '../../redux/actions/roles.actions';


const tableData = {
    title: 'Roles',
    rows: [
        { 
            id: 'name', 
            numeric: false, 
            disablePadding: true, 
            label: 'Role Name' 
        },
        { 
            id: 'description', 
            numeric: false, 
            disablePadding: false, 
            label: 'Role Description' 
        }
    ]
};

class RolePage extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchRoles());
    }

    componentDidUpdate(prevProps) {
        if(this.props.roles !== prevProps.roles) {
            this.props.dispatch(fetchRoles());
        }
    }

    createRole = (role) => {
        this.props.dispatch(createRole(role));
    }

    deleteRole = () => {
        this.props.dispatch(deleteRole(this.props.selected));
    }

    selectRole = (selected) => {
        this.props.dispatch(selectItem(selected, `${ROLES}`));
    }
  
    render() {
      return (  
        <div>
            {this.props.loading &&
                <LinearProgress />
            }  
            <TextField 
                name={'Role Name'} 
                description={'Role Description'} 
                create={this.createRole}
            /> 
            {this.props.roles && 
                <TableView 
                    tableData={tableData} 
                    data={this.props.roles}
                    deleteItem={this.deleteRole}
                    selectItem={this.selectRole}
                />
            }
        </div>
      );
    }
  }

function mapStateToProps(state, ownProps) {
    return {
        roles: state.rolesReducer.roles,
        selected: state.uiReducer.selected,
        loading: state.uiReducer.loading,
    };
}

export default connect(mapStateToProps)(RolePage);