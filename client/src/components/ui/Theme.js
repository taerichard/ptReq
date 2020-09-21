import { createMuiTheme } from "@material-ui/core/styles";

const lightWhite = `#D8CFCF`;
const white = "#FFFFFF";
const black = `#000000`;
export default createMuiTheme({
  shadows: ["none"],
  palette: {
    common: {
      white: "#FFFFFF",
      lightWhite: lightWhite,
    },
    primary: {
      main: white,
    },
    secondary: {
      main: black,
    },
  },
  typography: {
    tab: {
      color: black,
      //fontFamily: "Raleway",
      variant: "h1",
      textShadow: "none",
      //fontWeight: 800,
      fontSize: "1rem",
    },
  },
});
