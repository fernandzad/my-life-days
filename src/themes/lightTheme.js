import { createTheme } from '@mui/material';

export const lightTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#fff',
      light: '#DEE4E7',
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
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
    background: {
      default: '#fff',
    },
  },
});