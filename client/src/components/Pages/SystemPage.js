import React from 'react';
import TextField from '../Organisms/TextField';
import TableView from '../Organisms/TableView';

const tableData = {
    url: '/systems',
    title: 'Systems',
    rows: [
        {
            id: 'name',
            numeric: false,
            disablePadding: true,
            label: 'System Name'
        },
        {
            id: 'description',
            numeric: false,
            disablePadding: false,
            label: 'System Description'
        }
    ]
};

function SystemPage () {
    return (
        <div>
            <TextField 
                name={'System Name'} 
                desc={'System Description'} 
                url={'/systems'}
            />
            <TableView tableData={tableData}></TableView>
        </div>
    );
}

export default SystemPage;