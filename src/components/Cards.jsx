import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Cards.css";
const Cards = ({detail}) => {
  const [data, setdata] = useState([]);
  const getdata = () => {
    fetch("carddata.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((mydata) => {
        setdata(mydata);
      });
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 pd-5">
      {data &&
        data.slice(0,4).map((val) => {
          return (
            <div class="col containers">
              
              <div class="card h-100 w-55 shadow border border-warning rounded-3 mx-auto p-2">
              <h5 class="card-title title">{val.name}</h5>
                <img src={val.url} class="card-img-top imgsize center-image " alt="..." />
                <div class="card-body">
                  <p class="card-text">{val.desc}</p>
                  <Link to={val.path} class="btn btn-primary" onClick={()=>detail(val.price)}>{val.price}</Link>
                </div>
                
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Cards;
