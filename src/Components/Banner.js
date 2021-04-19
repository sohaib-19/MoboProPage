import React from "react"
import slide from "../Images/1-Qmobile.jpg"
import slide1 from "../Images/1-LP1S.jpg"
import slide2 from "../Images/1-AMAZFIT BIP U.jpg"


const Banner = () => {
    return (

        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={slide} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={slide1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={slide2} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      );
}

export default Banner;