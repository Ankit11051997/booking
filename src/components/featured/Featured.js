import React from "react";
import "./featured.css"
function Featured() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img className="featuredImg" src="https://img.freepik.com/free-photo/landscape-shot-beautiful-cholatse-mountains-body-water-khumbu-nepal_181624-24825.jpg?size=626&ext=jpg" alt="" />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h1>123 property</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img className="featuredImg" src="https://img.freepik.com/free-photo/landscape-shot-beautiful-cholatse-mountains-body-water-khumbu-nepal_181624-24825.jpg?size=626&ext=jpg" alt="" />
        <div className="featuredTitles">
          <h1>Austin</h1>
          <h1>456 property</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img className="featuredImg" src="https://img.freepik.com/free-photo/landscape-shot-beautiful-cholatse-mountains-body-water-khumbu-nepal_181624-24825.jpg?size=626&ext=jpg" alt="" />
        <div className="featuredTitles">
          <h1>Reno</h1>
          <h1>789 property</h1>
        </div>
      </div>
    </div>
  );
}

export default Featured;
