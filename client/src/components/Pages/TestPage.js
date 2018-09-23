import React from 'react';
import { connect } from 'react-redux';
import { fetchBooks, setBooks } from '../../redux/actions/books.action';


class TestPage extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchBooks());
    }
    render() {
        console.log(this.props.books);
        return (
            <div>
                {this.props.books}
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