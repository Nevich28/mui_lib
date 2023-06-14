import './App.css';
import { createTheme, colors, ThemeProvider } from '@mui/material';

// import { MuiAlert } from './components/MuiAlert';
// import { MuiAvatar } from './components/MuiAvatar';
// import { MuiBadge } from './components/MuiBadge';
import { MuiBottomNavigation } from './components/MuiBottomNavigation';
import { MuiMasonry } from './components/MuiMasonry';
// import { MuiBreadcrumbs } from './components/MuiBreadcrumbs';
// import { MuiLoadingButton } from './components/MuiLoadingButton';
// import { MuiDialog } from './components/MuiDialog';
// import { MuiChip } from './components/MuiChip';
// import { MuiList } from './components/MuiList';
// import { MuiDrawer } from './components/MuiDrawer';
// import { MuiLink } from './components/MuiLink';
// import { MuiAccordion } from './components/MuiAccordion';
// import { MuiImageList } from './components/MuiImageList';
import { MuiNavbar } from './components/MuiNavbar';
import { MuiResponsiveness } from './components/MuiResponsiveness';
// import { MuiProgress } from './components/MuiProgress';
// import { MuiSkeleton } from './components/MuiSkeleton';
// import { MuiSnackbar } from './components/MuiSnackbar';
import { MuiSpeedDial } from './components/MuiSpeedDial';
// import { MuiTabs } from './components/MuiTabs';
// import { MuiTimeline } from './components/MuiTimeline';
// import { MuiPicker2 } from './components/MuiPicker2';
// import { MuiTable } from './components/MuiTable';
// import { MuiTooltip } from './components/MuiTooltip';
// import { MuiCart } from './components/MuiCart';
// import { MuiAutocompled } from './components/MuiAutocompled';
// import { MuiLayout } from './components/MuiLayout';
// import { MuiRating } from './components/MuiRating';
// import { MuiCheckbox } from './components/MuiCheckbox';
// import { MuiSwitch } from './components/MuiSwitch';
// import { MuiRadioButton } from './components/MuiRadioButton';
// import { MuiSelect } from './components/MuiSelect';
// import { MuiButton } from './components/MuiButton';
// import { MuiTextField } from './components/MuiTextField';
// import { MuiTypography } from './components/MuiTypography';

const theme = createTheme({
    status: {
        danger: '#e53e3e',
    },
    palette: {
        secondary: {
            main: colors.orange[500],
        },
        neutral: {
            main: colors.grey[500],
            darker: colors.grey[700],
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                {/* <MuiTypography /> */}
                {/* <MuiButton /> */}
                {/* <MuiTextField /> */}
                {/* <MuiSelect /> */}
                {/* <MuiRadioButton /> */}
                {/* <MuiCheckbox /> */}
                {/* <MuiSwitch /> */}
                {/* <MuiRating /> */}
                {/* <MuiAutocompled /> */}
                {/* <MuiLayout /> */}
                {/* <MuiCart /> */}
                {/* <MuiAccordion /> */}
                {/* <MuiImageList /> */}
                {/* <MuiNavbar /> */}
                {/* <MuiBreadcrumbs /> */}
                {/* <MuiDrawer /> */}
                {/* <MuiAvatar /> */}
                {/* <MuiLink /> */}
                {/* <MuiSpeedDial /> */}
                {/* <MuiBottomNavigation /> */}
                {/* <MuiBadge /> */}
                {/* <MuiList /> */}
                {/* <MuiChip /> */}
                {/* <MuiTooltip /> */}
                {/* <MuiTable /> */}
                {/* <MuiAlert /> */}
                {/* <MuiSnackbar /> */}
                {/* <MuiDialog /> */}
                {/* <MuiProgress /> */}
                {/* <MuiSkeleton /> */}
                {/* <MuiLoadingButton /> */}
                {/* <MuiTabs /> */}
                {/* <MuiTimeline /> */}
                {/* <MuiMasonry /> */}
                <MuiResponsiveness />
            </div>
        </ThemeProvider>
    );
}

export default App;
