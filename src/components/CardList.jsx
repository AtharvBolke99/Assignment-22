import React from 'react'
import { useState } from "react";
import { cardinfo } from '../configs/Cardconfig';
import "./CardList.css"

function Cardlist() {
    const [info, setInfo] = useState(cardinfo);
  return (
    <div className="main-container">
        {info.map((carinfo) => {
          return (
            <div className="card">
              <img src={carinfo.imageUrl} className="img" />
              <h2 className="title">{carinfo.title}</h2>
              <p className="description">{carinfo.description}</p>
            </div>
          );
        })}
      </div>
  )
}

export default Cardlist
