import { Box, FormControlLabel, Switch } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react';
export const MuiSwitch = () => {
    const [checked, setChecked] = useState(false);
    console.log(checked);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked);
    };
    return (
        <Box>
            <FormControl>
                <FormLabel>Skills</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        label="Dark mode"
                        control={
                            <Switch
                                checked={checked}
                                onChange={handleChange}
                                size="medium"
                                color="warning"
                            />
                        }
                    />
                    <FormControlLabel
                        label="Other mode"
                        control={<Switch checked={checked} onChange={handleChange} />}
                    />
                </FormGroup>
            </FormControl>
        </Box>
    );
};
