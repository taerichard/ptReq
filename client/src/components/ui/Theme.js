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
    general: {
      fontFamily: "Dosis",
      textTransform: "none",
    },
    tab: {
      fontFamily: `Dosis`,
      textTransform: "uppercase",
      fontSize: "12px",
      fontWeight: "600",
      lineHeight: "15px",
      letterSpacing: "3px",
      color: "#232332",
    },
    logoInitial: {
      fontFamily: `Dosis`,
      textTransform: "uppercase",
      fontSize: "18px",
      fontWeight: "570",
      lineHeight: "20px",
      letterSpacing: "6px",
      color: "#232332",
    },
  },
});
