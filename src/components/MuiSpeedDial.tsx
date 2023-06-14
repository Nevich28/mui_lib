import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

export const MuiSpeedDial = () => {
    return (
        <SpeedDial
            ariaLabel="Navigation speed dial"
            sx={{ position: 'absolute', bottom: 16, right: 16 }}
            icon={<SpeedDialIcon openIcon={<EditOutlinedIcon />} />}>
            MuiSpeedDial
            <SpeedDialAction icon={<ContentCopyOutlinedIcon />} tooltipTitle="Copy" tooltipOpen />
            <SpeedDialAction icon={<LocalPrintshopOutlinedIcon />} tooltipTitle="Print" />
            <SpeedDialAction icon={<ShareOutlinedIcon />} tooltipTitle="Share" />
        </SpeedDial>
    );
};
