import React from 'react';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

import { MaterialUISwitch } from './MaterialSwitch.style';
import { THEME } from '../../base/constants/themes';
import useUserPreferencesContext from '../../base/stores/useUserPreferencesContext';

export const Navbar = () => {
  const { theme, setUserTheme } = useUserPreferencesContext();
  return (
    <>
      <AppBar position="static">
        <Container>
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              My Life Days
            </Typography>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={() => {
                  theme === THEME.DARK ? setUserTheme(THEME.LIGHT) : setUserTheme(THEME.DARK)
                }} sx={{ p: 0 }}>
                <FormGroup>
                  <FormControlLabel
                    control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
                    label={theme === THEME.DARK ? "Dark Mode" : "Light Mode"}
                  />
                </FormGroup>
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}
export default Navbar;