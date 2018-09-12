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
        return (
            <FormControlLabel
                control={
                    <Switch
                        checked={this.state.checkedB}
                        onChange={this.handleChange('checked')}
                        value="checkedB"
                        color="primary"
                    />
                }
                label="Hide Disabled User"
            />
        );
    }
}

export default LabeledSwitch;