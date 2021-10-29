/* eslint-disable */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import image1 from "../../images/Chloe.jpg";
import image2 from "../../images/Crystal.jpg";
import image3 from "../../images/Jake.jpg";
import image4 from "../../images/John.jpg";
import image5 from "../../images/Laura.jpg";
import image6 from "../../images/Mary.jpg";
import image7 from "../../images/Michelle.jpg";
import image8 from "../../images/Sara.jpg";

const useStyles = makeStyles((theme) => {
  container:{
    textAlign:'center';
  }
  imageBox: {
    block: "inline-block";
  }
});

const imageData = [
  { id: 1, src: image1},
  { id: 2, src: image2},
  { id: 3, src: image3},
  { id: 4, src: image4},
  { id: 5, src: image5},
  { id: 6, src: image6},
  { id: 7, src: image7},
  { id: 8, src: image8}
]


const imageList = imageData.map((item) => 
  <div key={item.id}>
    <img src={item.src}/>
  </div>
); 

function TrainerList(props) {
  const classes = useStyles(); 
    return (
      <div>
        <div className={classes.imageBox} style={classes.imageBox}>
            {imageList}
        </div>
      </div>
    );
}

export default TrainerList;
