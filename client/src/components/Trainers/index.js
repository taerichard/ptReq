import React,{ useState } from "react";
import axios from "axios";
import TrainerList from "./TrainerList";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    paddingTop: "10em",
    direction: "row",
  },
  firstRowText: {
    ...theme.typography.tab,
    marginLeft: "16em",
  },
  firstRow: {
    padding: "70px 0",
    backgroundColor: "#f6f6f6",
  }
}));


 function Trainers(){
  const [trainer, setTrainer] = useState(""); 
  const [city, setCity] = useState(""); 

  const handleSubmit = e => {
    e.preventDefault(); 
    alert("clicked");
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
          <TrainerList/>
      </form>
    </div>
  )
}


 export default Trainers;
