import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "./rating.css";

const CircleRating = ({ rating, textRating }) => {
  return (
    <div className=" lg:w-14 lg:h-14 md:w-12 md:h-12 w-11 h-11">
      <CircularProgressbar
        value={rating * 10}
        text={rating}
        styles={buildStyles({
          trailColor: "#0000",
          textSize: "1.7rem",
          textColor: "#ffff",
          strokeLinecap: "butt",
          pathColor: rating < 5 ? "red" : rating < 7 ? "orange" : "green",
        })}
      />
    </div>
  );
};
