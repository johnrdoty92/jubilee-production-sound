import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material/styles";

const theme = createTheme({palette: {mode: `dark`}});

export const ThemeProvider = ({children}: {children: React.ReactNode}) => {
  return (
    <MuiThemeProvider theme={theme}>
      {children}
    </MuiThemeProvider>
  );
};