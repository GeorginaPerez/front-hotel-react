import React from "react";
import {AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography} from "@mui/material";
import {Link} from 'react-router-dom';
import { Icon  } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
const pages = [{
    title: 'Habitaciones',
    link: '/rooms',
    variant: 'text'
}, {
    title: 'Instalaciones',
    link: '/installation',
    variant: 'text'
}, {
    title: 'Iniciar sesion',
    link: '/login',
    variant: 'text'
}, {
    title: 'Reservar Ahora',
    link: '/reserve-now',
    variant: 'contained'
}
];

export const NavBar = () => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl" >
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{mr: 2, display: {xs: 'none', md: 'flex'}}}
                    >
                        LOGO
                    </Typography>

                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                             <MenuIcon   />
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
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            {pages.map(({link,title, variant}) => (
                                <MenuItem to={link} component={Link} key={link} onClick={handleCloseNavMenu} >
                                    <Typography textAlign="center">{title}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{
                        flexGrow: 6,
                        justifyContent: 'flex-end',
                        alignItems: 'end',
                        display: {xs: 'none', md: 'flex'}
                    }}>
                        {pages.map(({link,title, variant}) => (
                            <Button
                                key={link}
                                component={Link}
                                to={link}
                                onClick={handleCloseNavMenu}
                                sx={{my: 2, color: 'white', display: 'block'}}
                                variant={variant}
                            >
                                {title}
                            </Button>
                        ))}

                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}