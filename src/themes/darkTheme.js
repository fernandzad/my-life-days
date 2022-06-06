import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#90caf9',
      light: '#a6d4fa',
      dark: '#648dae',
    },
    secondary: {
      main: '#f6a5c0',
      dark: '#aa647b',
    },
    info: {
      main: '#64b5f6',
      light: '#2196f3',
      dark: '#1976d2',
    },
    success: {
      main: '#81c784',
      light: '#4caf50',
      dark: '#388e3c',
    },
    warning: {
      main: '#ffb74d',
      light: '#ff9800',
      dark: '#f57c00',
    },
    error: {
      main: '#e57373',
      light: '#f48fb1',
      dark: '#aa647b',
    },
    text: {
      primary: '#fff',
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
    },
    background: {
      default: '#424242',
    },
  },
});