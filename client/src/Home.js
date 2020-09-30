import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import firstImage from "./images/knees.jpg";
import secondImage from "./images/plank.jpg";
import thirdImage from "./images/situp.jpg";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  firstRow: {
    padding: "70px 0",
    backgroundColor: "#f6f6f6",
    flex: "1 1 100%",

    //paddingLeft: "3em",
  },
  firstRowText: {
    ...theme.typography.tab,
    //marginLeft: "20em",
  },
  secondRowFirst: {
    flex: "1 1 33%",
  },
  secondRowSecond: {
    flex: "1 1 33%",
  },
  secondRowThird: {
    flex: "1 1 33%",
  },
  // secondRowContainer: {
  //   display: "inline-block",
  //   marginTop: "7em",
  //   paddingLeft: "3em",
  //   backgroundColor: "#ffffff",
  // },

  secondRowFirstText: {
    fontSize: "40px",
    letterSpacing: 0,
    lineHeight: 1.2,
    fontFamily: "Dosis",
  },
  secondRowSecondText: {
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontSize: "14px",
    lineHeight: "24px",
    color: "#7e7e7e",

    //marginBottom:"15px"
  },
  secondRowFirst: {
    border: "2px solid black",
    width: "1em",
  },
  thirdContainer: {
    display: "inline-flex",
  },
  image: {
    width: "300px",
    height: "320px",

    // [theme.breakpoints.down("lg")]: {
    //   width: "400px",
    //   height: "445px",
    // },
    // [theme.breakpoints.down("md")]: {
    //   width: "290px",
    //   height: "290px",
    // },
    // [theme.breakpoints.down("sm")]: {
    //   width: "150px",
    //   height: "240px",
    // },
  },

  imageCard: {
    display: "inline-block",
  },
  fourthRowTitle: {
    fontFamily: "Dosis",
    color: "#232332",
    textTransform: "uppercase",
    fontWeight: 400,
    letterSpacing: "2px",
    lineHeight: "28px",
    fontSize: "28px",
  },
  fourthRowText: {
    color: "#7e7e7e",
    fontSize: "14px",
    lineHeight: "25px",
    textTransform: "none",
  },
  fifthContainer: {
    marginTop: "5rem",
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Grid container direction="column">
        <Grid container direction="column" wrap="nowrap">
          <Grid container direction="row">
            <Grid item>
              <span className={classes.firstRowText}>About Us</span>
            </Grid>
            {/* Second Row Find your Trainer */}

            <Grid item>
              <div>
                <h1>Find Your Trainer</h1>
              </div>

              <div>
                <p>
                  Many desktop publishing packages and web page <br />
                  editors now use Lorem Ipsum as their default model text,
                  <br /> and a search for 'lorem ipsum' will uncover many <br />
                  web sites still in their infancy. Various versions have
                  <br />
                  evolved over the years, sometimes by accident, <br />
                  sometimes on purpose (injected humour and the like).
                </p>
              </div>

              <div>
                <p>
                  {" "}
                  Many desktop publishing packages and web page <br />
                  editors now use Lorem Ipsum as their default model text,
                  <br /> and a search for 'lorem ipsum' will uncover many <br />
                  web sites still in their infancy. Various versions have
                  <br />
                  evolved over the years, sometimes by accident, <br />
                  sometimes on purpose (injected humour and the like).
                </p>
              </div>
            </Grid>
          </Grid>
          {/* image container  */}
          <Grid
            classes={{ root: classes.thirdContainer }}
            container
            direction="row"
            wrap="nowrap"
          >
            <Grid item>
              <Card classes={{ root: classes.imageCard }}>
                <CardMedia
                  classes={{ root: classes.image }}
                  image={firstImage}
                  title="high knees"
                  component="img"
                />
              </Card>

              <Card classes={{ root: classes.imageCard }}>
                <CardMedia
                  classes={{ root: classes.image }}
                  image={secondImage}
                  title="plank"
                  component="img"
                />
              </Card>
            </Grid>
            <Grid item>
              <Card classes={{ root: classes.imageCard }}>
                <CardMedia
                  classes={{ root: classes.image }}
                  image={thirdImage}
                  title="situp"
                  component="img"
                />
              </Card>
            </Grid>
          </Grid>
        </Grid>

        {/* end of image container */}
        <Grid container direction="column">
          <Grid item>
            <div>
              <h2>Dedicate Yourself</h2>
              <p className={classes.fourthRowText}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
                tempora veritatis nemo aut ea iusto eos est
                <br /> expedita, quas ab adipisci.
              </p>
            </div>
          </Grid>

          {/* End of Dedicate Yourself Row */}
          <Grid container direction="column">
            <Grid container direction="row">
              <Grid item>
                <h2>Our Services</h2>
              </Grid>
              <Grid item>Cards Here</Grid>
            </Grid>
          </Grid>

          <Grid container direction="column">
            <Grid item>Quote Here</Grid>
            <Grid item>Footer here</Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;
