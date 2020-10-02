import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import firstImage from "./images/knees.jpg";
import secondImage from "./images/plank.jpg";
import thirdImage from "./images/situp.jpg";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  aboutUsRow: {
    padding: "70px 0",
    backgroundColor: "#f6f6f6",
    flex: "1 1 100%",
  },
  firstContainer: {
    marginTop: "8em",
  },

  firstRowText: {
    ...theme.typography.tab,
    marginLeft: "20em",
  },
  secondRowtextBlock: {
    paddingRight: "0",
  },
  secondRowFontStyle: {
    ...theme.typography.firstRow.first,
  },
  secondRowSecondText: {
    ...theme.typography.firstRow.second,
  },
  serviceCard: {
    ...theme.typography.servicesCard,
  },
  imageContainer: {
    marginTop: "8em",
  },
  image: {
    width: "300px",
    height: "320px",
  },

  imageCard: {
    display: "inline-block",
  },
  fourthRowTitle: {
    ...theme.typography.tab,
  },
  fourthRowText: {
    ...theme.typography.general,
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
            <Grid item classes={{ root: classes.aboutUsRow }}>
              <span className={classes.firstRowText}>About Us</span>
            </Grid>
            {/* Second Row Find your Trainer */}
            <Grid
              container
              direction="row"
              align="center"
              spacing={8}
              className={classes.firstContainer}
            >
              <Grid item lg={4} classes={{ root: classes.secondRowtextBlock }}>
                <div className={classes.findTrainerRow}>
                  <h1 className={classes.secondRowFontStyle}>
                    Find Your Trainer
                  </h1>
                </div>
              </Grid>
              <Grid item lg={4} classes={{ root: classes.secondRowtextBlock }}>
                <div className={classes.findTrainerRow}>
                  <p className={classes.secondRowSecondText}>
                    Many desktop publishing packages and web page <br />
                    editors now use Lorem Ipsum as their default model text,
                    <br /> and a search for 'lorem ipsum' will uncover many{" "}
                    <br />
                    web sites still in their infancy. Various versions have
                    <br />
                    evolved over the years, sometimes by accident, <br />
                    sometimes on purpose (injected humour and the like).
                  </p>
                </div>
              </Grid>
              <Grid
                item
                item
                lg={4}
                classes={{ root: classes.secondRowtextBlock }}
              >
                <div className={classes.findTrainerRow}>
                  <p className={classes.secondRowSecondText}>
                    {" "}
                    Many desktop publishing packages and web page <br />
                    editors now use Lorem Ipsum as their default model text,
                    <br /> and a search for 'lorem ipsum' will uncover many{" "}
                    <br />
                    web sites still in their infancy. Various versions have
                    <br />
                    evolved over the years, sometimes by accident, <br />
                    sometimes on purpose (injected humour and the like).
                  </p>
                </div>
              </Grid>
            </Grid>
          </Grid>

          {/* image container  */}
          <Grid
            classes={{ root: classes.imageContainer }}
            container
            direction="row"
            wrap="nowrap"
            align="center"
          >
            <Grid item lg={4}>
              <Card classes={{ root: classes.imageCard }}>
                <CardMedia
                  classes={{ root: classes.image }}
                  image={firstImage}
                  title="high knees"
                  component="img"
                />
              </Card>
            </Grid>
            <Grid item lg={4}>
              <Card classes={{ root: classes.imageCard }}>
                <CardMedia
                  classes={{ root: classes.image }}
                  image={secondImage}
                  title="plank"
                  component="img"
                />
              </Card>
            </Grid>
            <Grid item lg={4}>
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
        <Grid container direction="column" align="center">
          <Grid item lg={12}>
            <div>
              <h2 className={classes.secondRowFontStyle}>Dedicate Yourself</h2>
              <p className={classes.fourthRowText}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
                tempora veritatis nemo aut ea iusto eos est
                <br /> expedita, quas ab adipisci.
              </p>
            </div>
          </Grid>

          {/* End of Dedicate Yourself Row */}
          <Grid container direction="column">
            <Grid container direction="row" justify="center">
              <Grid item lg={12}>
                <h2>Our Services</h2>
              </Grid>
              <Grid item lg={4}>
                <Card>
                  <CardContent>
                    <h3 className={classes.serviceCard}>Boxing</h3>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item lg={4}>
                <Card>
                  <CardContent>
                    <h3 className={classes.serviceCard}>Weight Lifting</h3>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item lg={4}>
                <Card>
                  <CardContent>
                    <h3 className={classes.serviceCard}>Dynamic Movement</h3>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item lg={4}>
                <Card>
                  <CardContent>
                    <h3 className={classes.serviceCard}>Cardio</h3>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item lg={4}>
                <Card>
                  <CardContent>
                    <h3 className={classes.serviceCard}>Crossfit</h3>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item lg={4}>
                <Card>
                  <CardContent>
                    <h3 className={classes.serviceCard}>Yoga</h3>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;
