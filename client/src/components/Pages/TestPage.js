import React from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from '../../redux/actions/books.action';


class TestPage extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchBooks());
    }
    render() {
        return (
            <div>
                {this.props.books && this.props.books.map(book => book.name)}
            </div>            
        );
    }

}

function mapStateToProps(state, ownProps) {
    return {
        books: state.booksReducer.books,
    };
}

export default connect(mapStateToProps)(TestPage);