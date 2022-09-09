import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import SearchIcon from '@mui/icons-material/Search';

const StyledInputContainer = styled(Box)(({theme}) => ({
  display: `flex`,
  alignItems: `center`,
  width: `90%`,
  padding: theme.spacing(1),
  borderRadius: theme.spacing(2),
  backgroundColor: theme.palette.grey[900],
  marginInline: `auto`,
  marginBlock: theme.spacing(1),
  "& .MuiInputBase-root": {width: `100%`},
}));

export const Troubleshooting = () => {
  return (
    <Stack spacing={2}>
      <StyledInputContainer>
        <InputBase placeholder="What kind of problem are you having?"/>
        <SearchIcon/>
      </StyledInputContainer>
      <Typography variant="body1" m={3}>Help Section Coming Soon...</Typography>
    </Stack>
  );
};