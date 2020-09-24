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
  imageContainer: {
    display: "inline-block",
    textAlign: "center",
  },
  image: {
    width: "500px",
    height: "640px",
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <Grid container={true} className={classes.root}>
      <Grid item className={classes.imageContainer} lg={12}>
        <Card classes={{ root: classes.imageContainer }}>
          <CardMedia
            classes={{ root: classes.image }}
            image={firstImage}
            title="high knees"
            component="img"
          />
        </Card>

        <Card classes={{ root: classes.imageContainer }}>
          <CardMedia
            classes={{ root: classes.image }}
            image={secondImage}
            title="plank"
            component="img"
          />
        </Card>

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
  );
}

export default Home;
