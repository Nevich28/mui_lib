import { Stack, TextField } from '@mui/material';
import { DataPicker } from '@mui/lab';
import { useState } from 'react';

export const MuiPicker = () => {
    const [selectedDate, setSelectedDate] = (useState < string) | (null > null);
    const [expanded, setExpanded] = (useState < string) | (false > false);
    console.log(selectedDate);
    return (
        <Stack spacing={4} sx={{ width: '250px' }}>
            <DataPicker label="Date Picker" renderInput={(params) => <TextField {...params} />} />
            value={selectedDate}
            onChange=
            {(newValue) => {
                setSelectedDate(newValue);
            }}
        </Stack>
    );
};
