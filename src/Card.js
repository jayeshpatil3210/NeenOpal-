import React, { useState, useEffect } from "react";
import Heart from "react-heart";
import IconButton from "@mui/material/IconButton";
import Unlike from "@mui/icons-material/Favorite";
import Like from "@mui/icons-material/FavoriteBorder";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import BasicModal from "./Modal";
import userdata from "./data";

function Card() {
  const [data, setData] = useState([
    {
      id: "",
      name: "",
      email: " ",
      phone: "",
      website: "",
      like: "",
    },
  ]);

  useEffect(() => {
    setData(userdata);
  }, []);

  const handleHeartClick = (value, index) => {
    const newValue = { ...value, like: !value.like };
    const newData = [...data];
    newData[index] = newValue;
    setData(newData);
  };
  const onSubmit = (value, index) => {
    const newData = [...data];
    newData[index] = value;
    setData(newData);
  };

  const handleDelete = (value) => {
    const newData = data.filter((item) => item.id !== value.id);
    setData(newData);
  };
  const classCheck = (item) => {
    return;
  };
  console.log(data, "values//////");
  return (
    <div className="grid-container">
      {data?.map((item, index) => (
        <div className="card" key={item.id}>
          <img
            className="card-img"
            src="https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          ></img>
          <h4>{item.name}</h4>
          <div className="icon-email">
            <i className="fi fi-rr-envelope"></i>
            <p className="icn">{item.email}</p>
          </div>
          <div className="icon-email">
            <i className="fi fi-rr-phone-flip"></i>
            <p className="icn">{item.phone}</p>
          </div>
          <div className="icon-email">
            <i className="fi fi-rr-globe"></i>
            <p className="icn"> {item.website}</p>
          </div>
          <div className="card-btn">
            <div style={{ width: "2rem" }}>
              <IconButton
                onClick={() => handleHeartClick(item, index)}
                aria-label="delete"
              >
                {item.like ? <Like /> : <Unlike />}
              </IconButton>
              <i className={classCheck(item)}></i>

            </div>

            <BasicModal index={index} onSubmit={onSubmit} data={item} />
            <IconButton
              onClick={() => {
                handleDelete(item);
              }}
              aria-label="delete"
            >
              <DeleteIcon />
            </IconButton>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
