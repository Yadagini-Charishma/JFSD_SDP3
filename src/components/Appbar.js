import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';

// Define the pages and settings
const pages = ['Home', 'ContactUs', 'FAQ'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  // State hooks for menu controls
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElLogin, setAnchorElLogin] = useState(null);
  const [anchorElRegister, setAnchorElRegister] = useState(null);

  // Navigation hook
  const navigate = useNavigate();

  // Handlers for opening menus
  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleOpenLoginMenu = (event) => setAnchorElLogin(event.currentTarget);
  const handleOpenRegisterMenu = (event) => setAnchorElRegister(event.currentTarget);

  // Handlers for closing menus
  const handleCloseNavMenu = (page) => {
    setAnchorElNav(null);
    switch (page) {
      case 'Home':
        navigate('/home');
        break;
      case 'ContactUs':
        navigate('/contactus');
        break;
      case 'FAQ':
        navigate('/faq');
        break;
      default:
        navigate('/');
    }
  };

  const handleCloseUserMenu = () => setAnchorElUser(null);

  const handleCloseLoginMenu = (role) => {
    setAnchorElLogin(null);
    switch (role) {
      case 'AdminSignInPage':
        navigate('/adminlogin/signin');
        break;
      case 'StudentSignInPage':
        navigate('/studentlogin/signin');
        break;
      case 'PlacementCellSignInPage':
        navigate('/placementcelllogin/signin');
        break;
      default:
        navigate('/');
    }
  };

  const handleCloseRegisterMenu = (role) => {
    setAnchorElRegister(null);
    switch (role) {
      case 'StudentSignUpPage':
        navigate('/studentregister/signup');
        break;
      case 'PlacementCellSignUpPage':
        navigate('/placementcellregister/signup');
        break;
      default:
        navigate('/');
    }
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo for larger screens */}
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/home"
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
            LOGO
          </Typography>

          {/* Menu icon for mobile screens */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={() => setAnchorElNav(null)}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo for mobile screens */}
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          {/* Centering the navbar components */}
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleCloseNavMenu(page)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
            <Button
              key="login"
              onClick={handleOpenLoginMenu}
              sx={{ my: 2, color: 'white', display: 'flex', alignItems: 'center' }}
            >
              Login
              <ArrowDropDownIcon sx={{ ml: 1 }} />
            </Button>
            <Menu
              id="menu-login"
              anchorEl={anchorElLogin}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElLogin)}
              onClose={() => setAnchorElLogin(null)}
              sx={{ mt: 5 }}
            >
              <MenuItem onClick={() => handleCloseLoginMenu('AdminSignInPage')}>
                <Typography textAlign="center">Admin Login</Typography>
              </MenuItem>
              <MenuItem onClick={() => handleCloseLoginMenu('StudentSignInPage')}>
                <Typography textAlign="center">Student Login</Typography>
              </MenuItem>
              <MenuItem onClick={() => handleCloseLoginMenu('PlacementCellSignInPage')}>
                <Typography textAlign="center">Placement Cell Login</Typography>
              </MenuItem>
            </Menu>

            <Button
              key="register"
              onClick={handleOpenRegisterMenu}
              sx={{ my: 2, color: 'white', display: 'flex', alignItems: 'center' }}
            >
              Register
              <ArrowDropDownIcon sx={{ ml: 1 }} />
            </Button>
            <Menu
              id="menu-register"
              anchorEl={anchorElRegister}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElRegister)}
              onClose={() => setAnchorElRegister(null)}
              sx={{ mt: 5 }}
            >
              <MenuItem onClick={() => handleCloseRegisterMenu('StudentSignUpPage')}>
                <Typography textAlign="center">Student Register</Typography>
              </MenuItem>
              <MenuItem onClick={() => handleCloseRegisterMenu('PlacementCellSignUpPage')}>
                <Typography textAlign="center">Placement Cell Register</Typography>
              </MenuItem>
            </Menu>
          </Box>

          {/* User settings */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-settings"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
