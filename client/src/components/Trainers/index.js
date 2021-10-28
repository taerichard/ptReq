import React,{ useState } from "react";
import axios from "axios";
import TrainerList from "./TrainerList";
import TrainerCity from "./TrainerCity";
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
          <button>Search Trainers</button>
      </form>
    </div>
  )
}
// class Trainers extends React.Component {
//   state = {
//     trainers: [],
//     city: [],
//   };

//   searchSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.get("api/trainer");
//       console.log("clicked", response);
//       this.setState({ trainers: response.data });
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   searchByCitySubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.get(`api/trainer/city/city?=ass`);
//       console.log("clicked", response);
//       this.setState({ trainers: response.data });
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   handleCitySearchChange = (e) => {
//     this.setState({
//       city: e.target.value,
//     });
//   };

//   render() {
//     return (<div>
//         <button
//           onClick={this.searchSubmit}
//           variant="outline-secondary"
//           size="lg"
//         >
//           Show All Trainers
//         </button>

//         <input onChange={this.handleCitySearchChange} />
//         <button onClick={this.searchByCitySubmit}>Get Trainers By City</button>
//         <TrainerCity city={this.state.city} />

//         <TrainerList trainers={this.state.trainers} />
//       </div>
//     )
//   }
// }

 export default Trainers;
