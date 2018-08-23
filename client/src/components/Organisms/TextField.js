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
    name: 'name',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes, name, desc } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          required
          id="name"
          label={name}
          className={classes.textField}
          margin="normal"
        />
        <TextField
          required
          id="description"
          label={desc}
          className={(classes.textField, classes.descField)}
          margin="normal"
        />
        <Button className={classes.saveButton} variant="contained" size="small" color="primary">
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