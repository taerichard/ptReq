import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

// https://www.dmcinfo.com/latest-thinking/blog/id/10114/a-simple-guide-to-material-ui-grids
// practice screen resolution

const useStyles = makeStyles({
    container:{
        width: "100%",
        height: "100%"
    },
    title:{
        backgroundColor:'black'
    }
})

const CoachesComponent = () => {

    const classes = useStyles(); 

    return (
      <Grid container direction="row" justify="center">
            <Grid item xs={6}>
                <div style={{backgroundColor:'#000000', height:'43px'}}>Some Text Here</div>
            </Grid>
            <Grid container direction="row" justify="center">
                <Grid item xs={3}>
                    <div style={{backgroundColor:'#F4F4F2',  height:'438px'}}>
                    Masters of their craft.
                    Each of our elite certified coaches has a unique training style. No matter who you work with, you can expect exceptional one-on-one support and personalization.
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <div style={{backgroundColor:'gray',  height:'438px'}}>Second row</div>
                </Grid>
            </Grid>
            <Grid container direction="row" justify="center">
                <Grid item xs={6}>
                    <div style={{backgroundColor:'#000000',  height:'84px'}}>last row</div>
                </Grid>
            </Grid>
        </Grid>
    )
}
  
export default CoachesComponent; 

/*
align-content - determines the spacing between lines

flex-flow - mix of flex-direction and flex-wrap 

align-self
- accepts the same values as align-items but used for individual item

flex-wrap
nowrap: Every item is fit to a single line.
wrap: Items wrap around to additional lines.
wrap-reverse: Items wrap around to additional lines in reverse.

align-items verti
flex-start: Items align to the top of the container.
flex-end: Items align to the bottom of the container.
center: Items align at the vertical center of the container.
baseline: Items display at the baseline of the container.
stretch: Items are stretched to fit the container.

justify-content; hori
flex-start: Items align to the left side of the container.
flex-end: Items align to the right side of the container.
center: Items align at the center of the container.
space-between: Items display with equal spacing between them.
space-around: Items display with equal spacing around them.

flex-direction
row: Items are placed the same as the text direction.
row-reverse: Items are placed opposite to the text direction.
column: Items are placed top to bottom.
column-reverse: Items are placed bottom to top.

order
accepts an integer value that corresponds to the ordeer 
*/