import { Stack, TextField, InputAdornment } from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { useState } from 'react';

export const MuiTextField = () => {
    const [value, setvalue] = useState<string>('');
    return (
        <Stack spacing={4}>
            <Stack direction="row" spacing={2}>
                <TextField label="Name" variant="outlined" />
                <TextField label="Name" variant="filled" />
                <TextField label="Name" variant="standard" />
            </Stack>
            <Stack direction="row" spacing={2}>
                <TextField label="Small secondary" size="small" color="secondary" />
            </Stack>
            <Stack direction="row" spacing={2}>
                <TextField
                    label="Form input"
                    required
                    value={value}
                    onChange={(e) => setvalue(e.target.value)}
                    error={!value}
                    helperText={!value ? 'Required' : 'Do not share your password'}
                />
                <TextField
                    label="passord"
                    type="password"
                    helperText="Do not show your passord"
                    disabled
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <VisibilityOutlinedIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField label="Read only" InputProps={{ readOnly: true }} />
            </Stack>{' '}
            <Stack direction="row" spacing={2}>
                <TextField
                    label="Amount"
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    }}
                />
                <TextField
                    label="Weight"
                    InputProps={{
                        endAdornment: <InputAdornment position="end">kg</InputAdornment>,
                    }}
                />
            </Stack>
        </Stack>
    );
};
