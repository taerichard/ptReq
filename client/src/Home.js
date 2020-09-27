import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import firstImage from "./images/knees.jpg";
import secondImage from "./images/plank.jpg";
import thirdImage from "./images/situp.jpg";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    paddingTop: "10em",
    direction: "row",
  },
  firstRow: {
    padding: "70px 0",
    backgroundColor: "#f6f6f6",
  },
  firstRowText: {
    ...theme.typography.tab,
    marginLeft: "2.5rem",
  },
  secondRow: {
    padding: "100px 0",
    backgroundColor: "#ffffff",
  },
  secondRowFirst: {
    display: "inline-flex",
    border: "2px solid black",
    width: "1em",
  },
  imageContainer: {
    display: "inline-block",
    textAlign: "center",
  },
  image: {
    marginLeft: "1em",
    // width: "500px",
    // height: "520px",
    [theme.breakpoints.down("lg")]: {
      width: "400px",
      height: "445px",
    },
    [theme.breakpoints.down("md")]: {
      width: "300px",
      height: "320px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "150px",
      height: "240px",
    },
  },
  sidePanel: {},
}));

function Home() {
  const classes = useStyles();
  return (
    <Grid direction="column">
      <Grid item>
        <Grid item>
          <div className={classes.firstRow}>
            <span className={classes.firstRowText}>About Us</span>
          </div>
        </Grid>
      </Grid>
      {/* Second Row */}
      <Grid container="row">
        <Grid>
          <Grid item className={secondRowFirst}>
            hows
          </Grid>
          <Grid item className={secondRowFirst}>
            it
          </Grid>
          <Grid item className={secondRowFirst}>
            higm
          </Grid>
        </Grid>
      </Grid>
      {/* image container  */}
      <Grid container direction="row">
        <Grid item>
          <Card classes={{ root: classes.imageContainer }}>
            <CardMedia
              classes={{ root: classes.image }}
              image={firstImage}
              title="high knees"
              component="img"
            />
          </Card>
        </Grid>
        <Grid item>
          <Card classes={{ root: classes.imageContainer }}>
            <CardMedia
              classes={{ root: classes.image }}
              image={secondImage}
              title="plank"
              component="img"
            />
          </Card>
        </Grid>
        <Grid item>
          <Card classes={{ root: classes.imageContainer }}>
            <CardMedia
              classes={{ root: classes.image }}
              image={thirdImage}
              title="situp"
              component="img"
            />
          </Card>
        </Grid>
      </Grid>

      {/* end of image container */}
    </Grid>
  );
}

export default Home;
