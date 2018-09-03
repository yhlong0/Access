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
    width: 200,
  },
  descField: {
    width: 500,
  },
  saveButton: {
    margin: '25px 10px 10px 30px',
  }
});


class TextFields extends React.Component {
  state = {
    name: '',
    description: '',
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
      name: this.state.name,
      description: this.state.description,
    });
  };

  render() {
    const { classes, name, desc } = this.props;

    return (
      <form
        className={classes.container}
        noValidate
        autoComplete="off"
        onSubmit={this.handleSubmit}
      >
        <TextField
          required
          id="name"
          name="name"
          label={name}
          className={classes.textField}
          margin="normal"
          onChange={this.handleChange}
        />
        <TextField
          required
          id="description"
          name="description"
          label={desc}
          className={(classes.textField, classes.descField)}
          margin="normal"
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