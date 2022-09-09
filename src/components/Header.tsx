import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/system/Stack";
import {styled} from "@mui/material/styles";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)(({theme}) => ({
  textDecoration: `none`,
  color: `white`,
  padding: theme.spacing(1),
  backgroundColor: `rgba(255,255,255,0.2)`,
  borderRadius: 15,
}));

export const Header = () => {
  return (
    <AppBar position="fixed" sx={theme => ({
      [theme.breakpoints.down(`sm`)]:{
        top: `auto`,
        bottom: 0 
      }
    })}>
      <Toolbar>
        <Stack direction="row" spacing={3}>
          <StyledLink to="/" color="inherit">Sound Setup</StyledLink>
          <StyledLink to="troubleshooting" color="inherit">Troubleshooting</StyledLink>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};