import React from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import makeAnimated from 'react-select/lib/animated';

const suggestions = [
    { label: 'Afghanistan' },
    { label: 'Aland Islands' },
    { label: 'Albania' },
];

class ReportPage extends React.Component {
    state = {
        single: null,
        multi: null,
    };

    componentDidMount() {
        
    }

    handleChange = name => value => {
        this.setState({
          [name]: value,
        });
    };

    render() {
        return (
            <div>
                welcome to report page.
                <br />
                <Select
                    textFieldProps={{
                    label: 'Label',
                    InputLabelProps: {
                        shrink: true,
                    },
                    }}
                    options={suggestions}
                    components={makeAnimated()}
                    value={this.state.multi}
                    onChange={this.handleChange('multi')}
                    placeholder="Select multiple systems"
                    isMulti
                />
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