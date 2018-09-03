import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import TextField from '../Organisms/TextField';
import TableView from '../Organisms/TableView';
import { connect } from 'react-redux';
import * as roleActions from '../../actions/roleActions';

const tableData = {
    url: '/roles',
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
    state = {
      toBeDelete: [],
    };
    
    componentDidMount() {
        this.props.dispatch(roleActions.fetchRoles());
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
        //console.log(this.props.roles);
        //console.log(this.props.selected);
        //console.log(this.props.fetching);
      return (
        <div>
            
            <TextField 
                name={'Role Name'} 
                desc={'Role Description'} 
                url={'/roles'}
                createRole={this.createRole}
            />
            {this.props.fetching && 
                <LinearProgress />
            }   
            <TableView 
                tableData={tableData} 
                data={this.props.roles}
                deleteRole={this.deleteRole}
                selectRole={this.selectRole}
            />
        </div>
      );
    }
  }

function mapStateToProps(state, ownProps) {
    return {
        roles: state.role.role,
        selected: state.role.selected,
        fetching: state.role.fetching,
    };
}

export default connect(mapStateToProps)(RolePage);