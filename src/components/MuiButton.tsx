import React, { useState } from 'react';
import {
    Button,
    Stack,
    IconButton,
    ButtonGroup,
    ToggleButtonGroup,
    ToggleButton,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
export const MuiButton = () => {
    const [format, setFormat] = useState<string | null>(null);
    console.log(format);
    const handleFormatChange = (e: React.MouseEvent<HTMLElement>, updateFormats: string | null) => {
        setFormat(updateFormats);
    };
    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction="row">
                <Button variant="text" href="https://google.com">
                    Text
                </Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>
            <Stack spacing={2} direction="row">
                <Button variant="contained" color="primary">
                    Primary
                </Button>
                <Button variant="contained" color="secondary">
                    Secondary
                </Button>
                <Button variant="outlined" color="error">
                    Error
                </Button>
                <Button variant="contained" color="warning">
                    Warning
                </Button>
                <Button variant="contained" color="info">
                    Info
                </Button>
                <Button variant="contained" color="success">
                    Success
                </Button>
            </Stack>
            <Stack display="block" spacing={2} direction="row">
                <Button variant="contained" size="small">
                    Small
                </Button>
                <Button variant="contained" size="medium">
                    Medium
                </Button>
                <Button variant="contained" size="large">
                    Large
                </Button>
            </Stack>
            <Stack spacing={2} direction="row">
                <Button variant="contained" startIcon={<SendIcon />} disableRipple>
                    Send
                </Button>
                <Button variant="contained" endIcon={<SendIcon />} disableElevation>
                    Send
                </Button>
                <IconButton aria-label="send" color="success" size="small">
                    <SendIcon />
                </IconButton>
            </Stack>
            <Stack direction="row">
                <ButtonGroup
                    variant="contained"
                    orientation="vertical"
                    size="small"
                    color="secondary"
                    aria-label="alignment button group">
                    <Button onClick={() => alert('Left')}>Left</Button>
                    <Button>Center</Button>
                    <Button>Rigth</Button>
                </ButtonGroup>
            </Stack>
            <Stack direction="row">
                <ToggleButtonGroup
                    aria-label="text formatting"
                    value={format}
                    onChange={handleFormatChange}
                    size="small"
                    color="success"
                    orientation="vertical"
                    exclusive>
                    <ToggleButton value="bold" aria-label="bold">
                        <FormatBoldIcon />
                    </ToggleButton>
                    <ToggleButton value="italic" aria-label="italic">
                        <FormatItalicIcon />
                    </ToggleButton>
                    <ToggleButton value="underline" aria-label="underline">
                        <FormatUnderlinedIcon />
                    </ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </Stack>
    );
};
