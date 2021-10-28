import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    paddingTop: "10em",
    direction: "row",
  },

  secondRowContainer: {
    padding: "100px 0",
    backgroundColor: "#ffffff",
  },
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
    display: "inline-flex",
    border: "2px solid black",
    width: "1em",
  },
  thirdContainer: {},
  image: {
    marginLeft: "6em",
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
  fourthRowContainer: {
    marginTop: "15rem",
    textAlign: "center",
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
      {/* Second Row Find your Trainer */}
      <Grid
        container
        direction="row"
        className={classes.secondRowContainer}
        justify="space-evenly"
      >
        <Grid item className={classes.secondRowFirstText}>
          Find Your Trainer
        </Grid>
        <Grid item className={classes.secondRowSecondText}>
          Many desktop publishing packages and web page <br />
          editors now use Lorem Ipsum as their default model text,
          <br /> and a search for 'lorem ipsum' will uncover many <br />
          web sites still in their infancy. Various versions have
          <br />
          evolved over the years, sometimes by accident, <br />
          sometimes on purpose (injected humour and the like).
        </Grid>
        <Grid item className={classes.secondRowSecondText}>
          {" "}
          Many desktop publishing packages and web page <br />
          editors now use Lorem Ipsum as their default model text,
          <br /> and a search for 'lorem ipsum' will uncover many <br />
          web sites still in their infancy. Various versions have
          <br />
          evolved over the years, sometimes by accident, <br />
          sometimes on purpose (injected humour and the like).
        </Grid>
      </Grid>
     
      <Grid
        container
        direction="row"
        classes={{ root: classes.fourthRowContainer }}
        justify="center"
      >
        <Grid item>
          <div>
            <h2
              style={{ marginBottom: "3rem" }}
              className={classes.fourthRowTitle}
            >
              Dedicate Yourself
            </h2>
            <p className={classes.fourthRowText}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              tempora veritatis nemo aut ea iusto eos est
              <br /> expedita, quas ab adipisci.
            </p>
          </div>
        </Grid>
      </Grid>
      {/* End of Dedicate Yourself Row */}
      <Grid
        container
        direction="row"
        justify="center"
        classes={{ root: classes.fifthContainer }}
      >
        <Grid item>
          <h2
            style={{ marginBottom: "3rem" }}
            className={classes.fourthRowTitle}
          >
            Our Services
          </h2>
        </Grid>
      </Grid>
      {/* Adding Services  */}
    </Grid>
  );
}

export default Home;
