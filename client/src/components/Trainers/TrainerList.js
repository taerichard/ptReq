import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

export default function TrainerList(props) {
  const classes = useStyles();
  console.log("coming from trainerlist", props.trainers);

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
          <ListSubheader component="div">Trainers</ListSubheader>
        </GridListTile>
        {props.trainers.map((t) => (
          <GridListTile key={t.id}>
            <GridListTileBar
              title="Trainer"
              subtitle={<span>{t.firstName + " " + t.lastName}</span>}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
