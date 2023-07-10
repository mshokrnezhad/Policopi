import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: '#fff9db' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#333"
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
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem
                onClick={handleCloseNavMenu}
                sx={{
                  fontFamily: 'IRANSans',
                }}
              >
                <a href="/">چگونگی</a>
              </MenuItem>
              <MenuItem
                onClick={handleCloseNavMenu}
                sx={{
                  fontFamily: 'IRANSans',
                }}
              >
                <a href="/">درباره ما</a>
              </MenuItem>
              <MenuItem
                onClick={handleCloseNavMenu}
                sx={{
                  fontFamily: 'IRANSans',
                }}
              >
                <a href="/">تماس با ما</a>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: {
                xs: 'flex',
                md: 'none',
              },
              flexGrow: 0,
              fontFamily: 'IRANSans',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#333',
              textDecoration: 'none',
            }}
          >
            پلی کپی
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              variant="contained"
              sx={{
                my: 2,
                backgroundColor: '#ffd43b',
                color: '#333',
                fontFamily: 'IRANSans',
              }}
            >
              ثبت نام
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: '#333',
                display: 'block',
                fontFamily: 'IRANSans',
              }}
            >
              تماس با ما
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: '#333',
                display: 'block',
                fontFamily: 'IRANSans',
              }}
            >
              درباره ما
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: '#333',
                display: 'block',
                fontFamily: 'IRANSans',
              }}
            >
              چگونگی
            </Button>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'IRANSans',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#333',
              textDecoration: 'none',
            }}
          >
            پلی کپی
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
