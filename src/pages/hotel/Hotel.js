import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import "./hotel.css";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import MailList from "../../components/mailList/mailList";
import { useState } from "react";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
function Hotel() {
  const [slidenumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: "https://img.freepik.com/free-photo/landscape-shot-beautiful-cholatse-mountains-body-water-khumbu-nepal_181624-24825.jpg?size=626&ext=jpg",
    },
    {
      src: "https://img.freepik.com/free-photo/landscape-shot-beautiful-cholatse-mountains-body-water-khumbu-nepal_181624-24825.jpg?size=626&ext=jpg",
    },
    {
      src: "https://img.freepik.com/free-photo/landscape-shot-beautiful-cholatse-mountains-body-water-khumbu-nepal_181624-24825.jpg?size=626&ext=jpg",
    },
    {
      src: "https://img.freepik.com/free-photo/landscape-shot-beautiful-cholatse-mountains-body-water-khumbu-nepal_181624-24825.jpg?size=626&ext=jpg",
    },
    {
      src: "https://img.freepik.com/free-photo/landscape-shot-beautiful-cholatse-mountains-body-water-khumbu-nepal_181624-24825.jpg?size=626&ext=jpg",
    },
    {
      src: "https://img.freepik.com/free-photo/landscape-shot-beautiful-cholatse-mountains-body-water-khumbu-nepal_181624-24825.jpg?size=626&ext=jpg",
    },
  ];
  const handlechange = (i) => {
    setOpen(!open);
    setSlideNumber(i);
    console.log(i, "jjjj");
  };
  const handlemove = (direction) => {
    let newSlidenumbur;
    if (direction === "l") {
      newSlidenumbur = slidenumber === 0 ? 5 : slidenumber - 1;
    } else {
      newSlidenumbur = slidenumber === 5 ? 0 : slidenumber + 1;
    }
    setSlideNumber(newSlidenumbur);
    console.log(slidenumber,'11111');
  };
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)} />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handlemove("l")}
            />
            <div className="slideWarapper">
              <img
                src={photos[slidenumber].src}
                alt="images"
                className="sliderImg"
              />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handlemove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <h1 className="hotelTitle">Grnad Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPricehighlight">
            Book at $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, index) => (
              <div className="hotelImagewrapper">
                <img
                  onClick={() => handlechange(index)}
                  src={photo.src}
                  className="hotelImg"
                  alt="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailText">
              <h1 className="hotelTitle">Stay in the heart of krawok</h1>
              <p className="hotelDes">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                vero odit ipsum molestiae dicta dolor. Eaque suscipit tempora
                labore quod deleniti, accusamus vitae adipisci optio consequatur
                magnam, qui vero autem. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Est, vero odit ipsum molestiae dicta dolor.
                Eaque suscipit tempora labore quod deleniti, accusamus vitae
                adipisci optio consequatur magnam, qui vero autem. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Est, vero odit
                ipsum molestiae dicta dolor. Eaque suscipit tempora labore quod
                deleniti, accusamus vitae adipisci optio consequatur magnam, qui
                vero autem.
              </p>
            </div>
            <div className="hotelDetailPrice">
              <h1>Perfect for 9 night stay</h1>
              <span>
                {" "}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut,
                mollitia libero quos tempora deleniti officiis est eveniet
              </span>
              <h2>
                <b>$945</b>(9 nights)
              </h2>
              <button>Book or Reserve now</button>
            </div>
          </div>
        </div>
        <MailList />
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Hotel;
