import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from "@mui/material/Toolbar";
import { Box, Link } from "@mui/material";
import Stack from "@mui/system/Stack";

export const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
                <MenuIcon />
            </IconButton>
            <Stack direction="row" spacing={1}>
                <Link href="/" color="inherit">Setup</Link>
                <Link href="/help" color="inherit">Help</Link>
            </Stack>
            </Toolbar>
        </AppBar>
    );
};