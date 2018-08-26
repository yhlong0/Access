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
  
  
    render() {
     debugger
  
      return (
        <div>
            <TextField 
                name={'Role Name'} 
                desc={'Role Description'} 
                url={'/roles'}
                updateData = {this.updateData}
            />
            {this.state.data &&
            <TableView tableData={tableData} data = {this.state.data}></TableView>
            }
        </div>
      );
    }
  }
  
/*
function RolePage () {
    return (
        <div>
            <TextField 
                name={'Role Name'} 
                desc={'Role Description'} 
                url={'/roles'}
            />
            <TableView tableData={tableData}></TableView>
        </div>
    );
}


  componentWillMount() {
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

*/

export default RolePage;