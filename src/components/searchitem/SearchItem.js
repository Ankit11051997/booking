import "./searchitem.css";

function SearchItem() {
  return (
    <div className="searchItem">
      <img
        src="https://img.freepik.com/free-photo/landscape-shot-beautiful-cholatse-mountains-body-water-khumbu-nepal_181624-24825.jpg?size=626&ext=jpg"
        alt=""
        className="siImg"
      />
      <div className="siDes">
        <h1 className="siTitle">Tower Street Apartment</h1>
        <span className="Distance">500m from center</span>
        <span className="siTaxiop">Free airport taxi</span>
        <span className="siSubtitle">
          Studio apartment with airconditiontiong
        </span>
        <span className="siFeatures">Entire studio 1bathroom 1 full bed</span>
        <span className="isCancelop">Free cancellation</span>
        <span className="diCancelopSubtitle">
          You can cancel later, so lock in this great price
        </span>
      </div>
      <div className="siDetail">
        <div className="siRating">
          <span>Exellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$123</span>
          <span className="siTaxop">Include taxes and fees</span>
        <button className="siCheckButton ">See availability</button>
        </div>
      </div>
    </div>
  );
}

export default SearchItem;
