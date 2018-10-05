import React from 'react';
import { connect } from 'react-redux';


class ReportPage extends React.Component {

    componentDidMount() {
        
    }
    render() {
        return (
            <div>
                welcome to report page.
            </div>            
        );
    }

}

function mapStateToProps(state, ownProps) {
    return {
        books: state.booksReducer.books,
    };
}

export default connect(mapStateToProps)(ReportPage);