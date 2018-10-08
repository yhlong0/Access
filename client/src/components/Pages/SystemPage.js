import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import TextField from '../Organisms/TextField';
import TableView from '../Organisms/TableView';
import SimpleSnackbar from '../Atoms/Snackbar';

import { connect } from 'react-redux';
import { selectItem, switchSnackbar } from '../../redux/actions/ui.actions';
import { 
    SYSTEMS,
    fetchSystems, 
    createSystem,
    deleteSystem
} from '../../redux/actions/systems.actions';

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
        this.props.dispatch(fetchSystems());
    }

    createSystem = (system) => {
        this.props.dispatch(createSystem(system));
        this.props.dispatch(switchSnackbar());
    }

    deleteSystem = () => {
        this.props.dispatch(deleteSystem(this.props.selected));
    }

    selectSystem = (selected) => {
        this.props.dispatch(selectItem(selected, `${SYSTEMS}`));
    }

    render() {
        return (
            <div>
                {this.props.loading &&
                    <LinearProgress />
                } 
                <TextField 
                    name={'System Name'} 
                    description={'System Description'} 
                    create={this.createSystem}
                />
                {this.props.systems && 
                    <TableView
                        tableData={tableData}
                        data={this.props.systems}
                        deleteItem={this.deleteSystem}
                        selectItem={this.selectSystem}
                    />
                }
                <SimpleSnackbar 
                    showSnackbar={this.props.showSnackbar}
                />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        systems: state.systemsReducer.systems,
        selected: state.uiReducer.selected,
        loading: state.uiReducer.loading,
        showSnackbar: state.uiReducer.showSnackbar
    };
}

export default connect(mapStateToProps)(SystemPage);