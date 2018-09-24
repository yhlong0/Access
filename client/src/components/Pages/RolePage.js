import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import TextField from '../Organisms/TextField';
import TableView from '../Organisms/TableView';
import { connect } from 'react-redux';
import { fetchRoles } from '../../redux/actions/roles.actions';
import * as roleActions from '../../actions/roleActions';


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

    createRole = (role) => {
        this.props.dispatch(roleActions.createRole(role));
    }

    deleteRole = () => {
        this.props.dispatch(roleActions.deleteRole(this.props.selected));
    }

    selectRole = (selected) => {
        this.props.dispatch(roleActions.selectRole(selected));
    }
  
    render() {
      return (
        <div>
            {this.props.fetching &&
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
        //selected: state.role.selected,
        //fetching: state.role.fetching,
    };
}

export default connect(mapStateToProps)(RolePage);