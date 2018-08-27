import React from 'react';
import TextField from '../Organisms/TextField';
import TableView from '../Organisms/TableView';
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
      data : [],
    };
    
  componentDidMount() {
        debugger
        axios.get('/roles')
            .then(res => {
                this.setState({ data: res.data });
            });
    }

    updateData = (res) =>{
        debugger
        this.setState({ data: res.data });
    }

    handleDelete = (selectedId) => {
        selectedId.map(id => {
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
      return (
        <div>
            <TextField 
                name={'Role Name'} 
                desc={'Role Description'} 
                url={'/roles'}
                updateData = {this.updateData}
            />
            <TableView 
                tableData={tableData} 
                data = {this.state.data}
                handleDelete={this.handleDelete}
            />
        </div>
      );
    }
  }

export default RolePage;