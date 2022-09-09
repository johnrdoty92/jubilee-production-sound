import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material/styles";


const theme = createTheme({
  palette: {mode: `dark`},
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        i {
          color: #42a5f5;
        }
        div[data-rmiz] img {
          max-width: 100%;
        }
        [data-rmiz-modal-overlay="visible"] {
          background-color: black;
        }
      `,
    },
  },
});

export const ThemeProvider = ({children}: {children: React.ReactNode}) => {
  return (
    <MuiThemeProvider theme={theme}>
      {children}
    </MuiThemeProvider>
  );
};