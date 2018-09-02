import React from 'react';
import TextField from '../Organisms/TextField';
import TableView from '../Organisms/TableView';
import { connect } from 'react-redux';
import * as roleActions from '../../actions/roleActions';
import axios from 'axios';

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

    updateData = (role) => {
        //this.setState({ data: res.data });
        this.props.dispatch(roleActions.createRole(role));
    }

    deleteRole = () => {
        this.props.dispatch(roleActions.deleteRole(this.props.selected));
    }

    selectRole = (selected) => {
        this.props.dispatch(roleActions.selectRole(selected));
    }

    updateTBD = (selected) => {
        this.setState({ toBeDelete: ['test', 'test2'] });
        console.log(this.state.toBeDelete);
    }

    deleteItem = (toBeDelete) => {
        toBeDelete.map(id => {
            axios.delete(`/roles/${id}`)
                .then(res => {
                    console.log(res.data);
                    axios.get('/roles')
                    .then(res => {
                        this.setState({ data: res.data });
                    });
                });
            return id;
        });
    }
  
    render() {
        //console.log(this.props.roles);
        console.log(this.props.selected);
      return (
        <div>
            <TextField 
                name={'Role Name'} 
                desc={'Role Description'} 
                url={'/roles'}
                updateData={this.updateData}
            />
            <TableView 
                tableData={tableData} 
                data={this.props.roles}
                updateTBD={this.updateTBD}
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
    };
}

export default connect(mapStateToProps)(RolePage);