import { ThemeProvider } from '@mui/material';
import useUserPreferencesContext, { UserPreferencesProvider  } from '../../base/stores/useUserPreferencesContext';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { THEME } from '../../base/constants/themes';
import { lightTheme } from '../../themes/lightTheme';
import { darkTheme } from '../../themes/darkTheme';

import { Outline } from '../../layouts/Outline';
import { Home } from '../../pages/Home/Home.component';
import { Navbar } from '../../components/Navbar';

function App() {
  const { theme } = useUserPreferencesContext();
  return (
    <>
      <UserPreferencesProvider>
        <ThemeProvider theme={theme === THEME.LIGHT ? lightTheme : darkTheme }>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Navbar />
            <Outline>
              <Home />
            </Outline>
          </LocalizationProvider>
        </ThemeProvider>
      </UserPreferencesProvider>
    </>
  );
}

export default App;