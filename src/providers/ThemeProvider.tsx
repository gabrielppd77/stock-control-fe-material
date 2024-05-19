import { ThemeProvider as ThemeProviderMain, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      light: "#635bff",
      main: "#635bff",
      dark: "#121621",
      contrastText: "#ffffff",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        color: "primary",
        variant: "contained",
        style: { textTransform: "none" },
      },
    },
  },
});

interface ThemeProviderProps {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  return <ThemeProviderMain theme={theme}>{children}</ThemeProviderMain>;
}
