import React from 'react';
import TextField from '../Organisms/TextField';
import TableView from '../Organisms/TableView';

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

function RolePage () {
    return (
        <div>
            <TextField name={'Role Name'} desc={'Role Description'} />
            <TableView tableData={tableData}></TableView>
        </div>
    );
}

export default RolePage;