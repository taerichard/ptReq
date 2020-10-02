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
    firstRow: {
      first: {
        fontFamily: "Dosis",
        textTransform: "none",
        color: "#232332",
        fontSize: "40px",
        fontWeight: "700",
        letterSpacing: "normal",
        lineHeight: "48px",
      },
      second: {
        color: "#7e7e7e",
        fontFamily: "Dosis",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "24px",
      },
    },
    servicesCard: {
      fontFamily: "Dosis",
      fontSize: "17px",
      fontStyle: "normal",
      fontWeight: "400",
      height: "18px",
      letterSpacing: "1px",
      lineHeight: "18.7px",
    },
    general: {
      fontFamily: "Dosis",
      textTransform: "none",
      color: "#232332",
      fontSize: "14px",
      fontStyle: "normal",
      lineHeight: "24px",
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
