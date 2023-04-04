import { format } from "date-fns";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./list.css";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchitem/SearchItem";
function List() {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.option);
  const [openDate, setOpenDate] = useState(false);
  console.log(destination, date, options, "11111");
  return (
    <div>
      <Navbar />
      <Header type={"list"} />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" name="" id="" />{" "}
            </div>
            <div className="lsItem">
              <label>Check-in-Date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {`${format(date[0].startDate, "MM/dd/yyyy")}`} to
                {`${format(date[0].endDate, "MM/dd/yyyy")}`}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  minDate={new Date()}
                />
              )}
            </div>
            <div className="lsItem">
              <label htmlFor="">Options</label>
              <div className="lsOptions">
                <div className="lsOpenItem">
                  <span className="optionText">
                    Max Price <small>per night</small>
                  </span>
                  <input type="number" className="lsoptionInput" />
                </div>
                <div className="lsOpenItem">
                  <span className="optionText">
                    Min Price <small>per night</small>
                  </span>
                  <input type="number" className="lsoptionInput" />
                </div>
                <div className="lsOpenItem">
                  <span className="optionText">Adult</span>
                  <input
                    min={1}
                    type="number"
                    className="lsoptionInput"
                    placeholder={options.adults}
                  />
                </div>
                <div className="lsOpenItem">
                  <span className="optionText">Children</span>
                  <input
                    min={0}
                    type="number"
                    className="lsoptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOpenItem">
                  <span className="optionText">Rooms</span>
                  <input
                    min={1}
                    type="number"
                    className="lsoptionInput"
                    placeholder={options.rooms}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <h1 className="resultTitle">Result</h1>
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
