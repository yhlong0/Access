import React from 'react';
import TextField from '../Organisms/TextField';
import TableView from '../Organisms/TableView';
import axios from 'axios';

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
class SystemPage extends React.Component {
    state = {
        data:[],
    };

    componentDidMount() {
        axios.get('/systems')
            .then(res => {
                this.setState({ data: res.data });
            });
    }

    updateData = (res) =>{
        this.setState({ data: res.data });
    }

    render() {
        return (
            <div>
                <TextField 
                    name={'System Name'} 
                    desc={'System Description'} 
                    url={'/systems'}
                    updateData={this.updateData}
                />
                <TableView tableData={tableData} data={this.state.data}></TableView>
            </div>
        );
    }

}

export default SystemPage;