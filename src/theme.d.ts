import { ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Theme {
        status: {
            danger: string;
        };
    }

    interface ThemeOptions {
        status: {
            danger: React.CSSProperties['color'];
        };
    }
    interface Palette {
        neutral?: PalleteColor;
    }

    interface PaletteOptions {
        neutral?: PaletteColorOptions;
    }

    interface SimpePalletteColorOptions {
        darker?: string;
    }

    interface PaletteColor {
        darker?: string;
    }
}
