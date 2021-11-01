import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    title: {
      padding: "70px 0",
      backgroundColor: "#f6f6f6",
      },
    titleText: {
      ...theme.typography.tab,
      marginLeft: "15em",
      //fontFamily:"Dosis"
      }
  }));



export default function SignUpForm(){
    const classes = useStyles(); 
    return(
    <Grid container direction="column">
       <Grid className={classes.title} container direction="row" justify="flex-start">
            <span className={classes.titleText}>Sign up</span>
        </Grid>
        <Grid direction="row">
            <form>
                <label>Full Name</label>
                <input 
                    type="text"
                    placeholder="Enter full name"
                />
                <label>Age</label>
                <input
                    type="text"
                    placeholder="Enter age"
                />
                <button>Submit</button>
            </form>
        </Grid>
    </Grid>)
}