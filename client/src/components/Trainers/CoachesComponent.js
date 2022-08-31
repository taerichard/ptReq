import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import coachImage from "../../images/CoachImage.jpg";
import AcUnitIcon from "@material-ui/icons/AcUnit";

// https://www.dmcinfo.com/latest-thinking/blog/id/10114/a-simple-guide-to-material-ui-grids
// practice screen resolution

const useStyles = makeStyles((theme) => ({
    container:{
        width: "100%",
        height: "100%"
    },
    title:{
        backgroundColor:'black'
    },
    box_main_title:{
        fontFamily: theme.typography.fontFamily,
        fontStyle: "normal",
        fontSize: "18px",
        lineHeight: "24px",
        color:'white',
        backgroundColor:'#000000', 
        height:'43px',
        letterSpacing:3
    },
    box_title:{
        fontSize: "40px",
        letterSpacing: 0,
        lineHeight: 1.2,
        fontFamily: "Dosis",
        margin: 0, 
    },
    box_text:{
        //fontFamily: "Open Sans",
        fontFamily: theme.typography.fontFamily,
        fontStyle: "normal",
        fontSize: "14px",
        lineHeight: "24px",
        color:'black'
        //color: "#7e7e7e",
        //marginBottom:"15px"
          
    }
    
}));

const CoachesComponent = () => {

    const classes = useStyles(); 

    return (
        <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={5}>
                <div>5</div>
            </Grid>
            <Grid item xs={2}>
                <div>2</div>
            </Grid>
            <Grid item xs={5}>
                <div>5</div>
            </Grid>
            
        </Grid>

    //   <Grid container direction="row" justify="center">
    //         <Grid item xs={6}>
    //             <div className={classes.box_main_title}>Reach your goals.</div>
    //         </Grid>
    //         <Grid container direction="row" justify="center">
    //             <Grid item xs={3}>
    //                 <div style={{backgroundColor:'#F4F4F2',  height:'438px'}}>
    //                 <Grid item>
    //                     <h1 className={classes.box_title}>Masters of their craft.</h1>
    //                 </Grid>
    //                 <Grid item>
    //                     <div className={classes.box_text}>
    //                     Each of our elite certified coaches has a unique training style. No matter who you work with, you can expect exceptional one-on-one support and personalization.
    //                     </div>
    //                 </Grid>
    //                 </div>
    //             </Grid>
    //             <Grid item xs={3}>
    //                 <div style={{backgroundColor:'#F4F4F2',  height:'438px'}}>
    //                     <img
    //                         src={coachImage}
    //                     />
    //                 </div>
    //             </Grid>
    //         </Grid>
    //         <Grid container direction="row" justify="center">
    //             <Grid item xs={6}>
    //                 <div style={{backgroundColor:'#000000',  height:'84px'}}>last row</div>
    //             </Grid>
    //         </Grid>
    //     </Grid>
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