import React from 'react';
import { connect } from 'react-redux';


class TestRedux extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.showAllUsers(this.props.showAllUsers));
        this.props.dispatch(systemActions.fetchSystems());
        this.props.dispatch(roleActions.fetchRoles());
    }

    render() {
        return (
            <div>test</div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        users: state.user,
    }
};

export default connect(mapStateToProps)(TestRedux);