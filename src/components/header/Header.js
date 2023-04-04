import "./header.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format, previousDay } from "date-fns";
import {
  faBed,
  faPlane,
  faCar,
  faTaxi,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const Header = ({ type }) => {
  const [destination, setDestination] = useState(" ");
  const [openOption, setOpenOption] = useState(false);
  const [option, setOption] = useState({
    adults: 1,
    children: 0,
    rooms: 1,
  });
  console.log(destination, "destina");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const handleOption = (name, operation) => {
    setOption((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? option[name] + 1 : option[name] - 1,
      };
    });
  };
  const navigate = useNavigate();
  const handlesearch = () => {
    navigate("/hotels", { state: { destination, date, option } });
  };
  return (
    <div>
      <div className="header">
        <div
          className={
            type === "list" ? "headerContainer listMode" : "headerContainer"
          }
        >
          <div className="headerList">
            <div className="headerListItem active">
              <FontAwesomeIcon icon={faBed} />
              <span>Stays</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faPlane} />
              <span>Flights</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faCar} />
              <span>Car rentals</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faBed} />
              <span>Attractions</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faTaxi} />
              <span>Airport taxis</span>
            </div>
          </div>
          {type !== "list" && (
            <div>
              <h1 className="headerTitle">
                A lifetime of dicounts? It's Genius.
              </h1>
              <p className="headerDesc">
                Get rewareded for your travels -unlock instant savings of 10% or
                more with a free Lamabooking account
              </p>

              <button className="headerBtn">Sign in/Register</button>

              <div className="headerSearch">
                <div className="headerSearchItem">
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    className="headerIcon"
                  />
                  <input
                    type="text"
                    placeholder="where are you going?"
                    className="headerSearchInput"
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>
                <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faBed} className="headerIcon" />
                  <span
                    onClick={() => {
                      setOpenDate(!openDate);
                    }}
                    className="headerSeacrchText"
                  >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                    date[0].endDate,
                    "MM/dd/yyyy"
                  )}`}</span>
                  {openDate && (
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setDate([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={date}
                      className="date"
                    />
                  )}
                </div>
                <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                  <span
                    className="headerSeacrchText"
                    onClick={() => setOpenOption(!openOption)}
                  >
                    {`${option.adults} adults. ${option.children} children. ${option.rooms} rooms`}
                  </span>
                  {openOption && (
                    <div className="options">
                      <div className="optionItem">
                        <span className="optionText">Adults</span>{" "}
                        <div className="optionCounter">
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption("adults", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">{`${option.adults}`}</span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption("adults", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optionText">Children</span>{" "}
                        <div className="optionCounter">
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption("children", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">{`${option.children}`}</span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption("children", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optionText">Rooms</span>{" "}
                        <div className="optionCounter">
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption("rooms", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">{`${option.rooms}`}</span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption("rooms", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="headerSearchItem">
                  <button onClick={handlesearch} className="headerBtn">
                    Search
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
