/**
 * Provides all style elements of the App component.
 */

import { createTheme } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

let theme = createTheme({
  palette: {
    primary: {
      main: "#eceff1",
    },
    secondary: {
      main: "#eceff1",
    },
    tertiary: {
      main: "#616161",
    },
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 300,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
  border: {
    radius: 10,
    color: grey[300],
  },
});

theme = createTheme(theme, {
  paper: {
    border: `1px solid ${theme.border.color}`,
    borderRadius: theme.border.radius,
    padding: theme.spacing(2),
  },
});

export default theme;
