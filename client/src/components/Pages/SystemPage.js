import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import TextField from '../Organisms/TextField';
import TableView from '../Organisms/TableView';
import { connect } from 'react-redux';
import * as systemActions from '../../actions/systemActions';
import axios from 'axios';

const tableData = {
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

    componentDidMount() {
        this.props.dispatch(systemActions.fetchSystems());
    }

    createSystem = (system) => {
        this.props.dispatch(systemActions.createSystem(system));
    }

    deleteSystem = () => {
        this.props.dispatch(systemActions.deleteSystem(this.props.selected));
    }

    selectSystem = (selected) => {
        this.props.dispatch(systemActions.selectSystem(selected));
    }

    render() {
        console.log(this.props.systems);
        return (
            <div>
                <TextField 
                    name={'System Name'} 
                    desc={'System Description'} 
                    create={this.createSystem}
                />
                {this.props.fetching && 
                    <LinearProgress />
                }  
                <TableView 
                    tableData={tableData} 
                    data={this.props.systems}
                    deleteItem={this.deleteSystem}
                    selectItem={this.selectSystem}
                />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        systems: state.system.system,
        selected: state.system.selected,
        fetching: state.system.fetching,
    };
}

export default connect(mapStateToProps)(SystemPage);