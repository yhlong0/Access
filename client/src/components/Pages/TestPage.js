import React from 'react';
import { connect } from 'react-redux';
import { fetchSystems } from '../../redux/actions/systems.actions';


class TestPage extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchSystems());
    }
    render() {
        console.log(this.props.systems);
        return (
            <div>
                {this.props.systems}
            </div>            
        );
    }

}

function mapStateToProps(state, ownProps) {
    return {
        systems: state.systems,
    };
}

export default connect(mapStateToProps)(TestPage);