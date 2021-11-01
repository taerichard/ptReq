import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ToolBar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Grid from "@material-ui/core/Grid";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    //event listener when users are scrolling
    disableHysteresis: true, // if there is a delay when users are scrolling
    threshold: 0, // defaults 100, it controls how far the user has to start scrolling before it triggers this event listener.
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  indicator: {
    backgroundColor: "white",
  },
  toolBarMargin: {
    ...theme.mixins.toolbar,
    marginLeft: "auto",
    marginBottom: "1em",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 100,
    marginLeft: "25px",
  },
  logoInitial: {
    ...theme.typography.logoInitial,
    position: "absolute",
    top: "15px",
    left: "10px",
  },
  title: {
    padding: "70px 0",
    backgroundColor: "#f6f6f6",
  },
  titleText: {
    ...theme.typography.tab,
    marginLeft: "16em",
  },
}));

 function Header() {
  const classes = useStyles();

  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container direction="column">
    <React.Fragment>
      <ElevationScroll>
        <AppBar className={classes.indicator}>
          <div className={classes.logoInitial}>RTAE</div>
          <ToolBar classes={{ root: classes.toolBarMargin }} disableGutters>
            <Tabs
              classes={{ indicator: classes.indicator }}
              textColor="secondary"
              //indicatorColor="white"
              onChange={handleChange}
              value={value}
            >
              <Tab
                className={classes.tab}
                label="Home"
                to="/"
                component={Link}
              />
              <Tab
                className={classes.tab}
                label="Trainers"
                to="/trainer"
                component={Link}
              />
            
              <Tab
                className={classes.tab}
                label="Contact Us"
                to="contact"
                component={Link}
              />
              <Tab
                className={classes.tab}
                label="Sign Up"
                to="/register"
                component={Link}
              />
            </Tabs>
          </ToolBar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolBarMargin} />
    </React.Fragment>
    </Grid>
  );
}

export default Header;