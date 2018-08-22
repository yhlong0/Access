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
  saveButton: {
    margin: '25px 10px 10px 30px',
  }
});


class TextFields extends React.Component {
  state = {
    roleName: 'Cat in the Hat',
  };

  handleChange = roleName => event => {
    this.setState({
      [roleName]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          required
          id="roleName"
          label="Role Name"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          required
          id="roleDescription"
          label="Role Description"
          className={classes.textField}
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