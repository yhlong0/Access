import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

class LabeledSwitch extends React.Component {
    state = {
        checked: true,
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    render() {
        const { showAllUsers } = this.props;
        return (
            <FormControlLabel
                control={
                    <Switch
                        checked={this.state.checkedB}
                        onChange={this.handleChange('checked')}
                        onClick={showAllUsers}
                        value="checked"
                        color="primary"
                    />
                }
                label="Show Disabled User"
            />
        );
    }
}

export default LabeledSwitch;