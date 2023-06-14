import { Stack, TextField } from '@mui/material';
import { DatePicker } from '@mui/lab';
import { useState } from 'react';

export const MuiPicker2 = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    // const [expanded, setExpanded] = useState<string | false>(false);
    console.log({ selectedDate });
    return (
        <Stack spacing={4} sx={{ width: '250px' }}>
            <DatePicker
                label="Date Picker"
                renderInput={(params: any) => <TextField {...params} />}
                value={selectedDate}
                onChange={(newValue: any) => {
                    setSelectedDate(newValue);
                }}
            />
        </Stack>
    );
};
