import React, { useState } from "react";
import "./Card.css";
const Card = ({data}) => {
  const [myData,setData]=useState([]);
  data.then(data=>{
    setData(data);
  })
  return (
    <div className="card-link">
      {myData.map((data)=>{
        return <div><a target="_blank" href={data.html_url}>{data.name}</a></div>
      })}
    </div>
  );
};
export default Card;
