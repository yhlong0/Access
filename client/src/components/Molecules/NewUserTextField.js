import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginBottom: 20,
        width: 200, 
    },
    saveButton: {
        margin: '25px 10px 20px 30px',
    },
    dateField: {

        marginTop: 16,
    }
});


class TextFields extends React.Component {
    state = {
        firstname: '',
        lastname: '',
        joinDate: new Date(),
    };

    handleChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({ [name]: value });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.create({
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            joinDate: this.state.joinDate,
        });
    };

    render() {
        const { classes } = this.props;        

        return (
            <form
                className={classes.container}
                noValidate
                autoComplete="off"
                onSubmit={this.handleSubmit}
            >
                <TextField
                    required
                    id="firstname"
                    name="firstname"
                    label="First Name"
                    className={classes.textField}
                    margin="normal"
                    onChange={this.handleChange}
                />
                <TextField
                    required
                    id="lastname"
                    name="lastname"
                    label="Last Name"
                    className={classes.textField}
                    margin="normal"
                    onChange={this.handleChange}
                />
                <TextField
                    id="joinDate"
                    name="joinDate"
                    label="Join Date"
                    type="date"
                    className={(classes.textField, classes.dateField)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={this.handleChange}
                />
                <Button
                    className={classes.saveButton}
                    variant="contained"
                    size="small"
                    color="primary"
                    type="submit"
                >
                    Save
        </Button>
            </form>
        );
    }
}

TextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);