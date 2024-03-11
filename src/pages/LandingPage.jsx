import React from "react";
import Navbar from "../components/Navbar";
import { CardsData } from "../components/CardsData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const LandingPage = () => {
  return (
    <div>
      {/* banner Part  */}
      <div style={{ background: "#E9E9E9" }}>
        <Navbar />

        <div className=" d-flex justify-content-center font-bold display-3">
          <h3 className="w-75 p-5 text-center">
            We Revolutionalise Commerce with Seamless Peer-to-Peer Transactions
          </h3>
        </div>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        autoplay={{ delay: 1000 }}
        className="mySwiper"
      >
        {CardsData.map((card, index) => (
          <SwiperSlide key={card.id}>
            <div className="container-fluid mt-3">
              <div className="row mx-md-5">
                {CardsData.slice(index, index + 6).map((card) => (
                  <div key={card.id} className="col-md-2 my-2">
                    <div
                      style={{ borderRadius: "20px" }}
                      className="card shadow-sm"
                    >
                      <div className="card-body text-center d-flex flex-column align-items-center justify-content-center">
                        <img
                          src={card.imagePath}
                          alt={card.name}
                          className="img-fluid mb-2"
                          style={{ maxWidth: "100px", maxHeight: "100px" }}
                        />
                        <span>{card.name}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LandingPage;
