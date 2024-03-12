import React from "react";
import Navbar from "../components/Navbar";
import { CardsData, productsData } from "../components/CardsData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Footer from "../components/Footer";

const LandingPage = () => {
  const formatPrice = (price) => {
    if (isNaN(price)) {
      return "Invalid Price";
    }
    const formattedPrice = price
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, "$&,")
      .replace(".00", "");

    return formattedPrice;
  };
  
  return (
    <div>
      {/* banner Part  */}
      <div style={{ background: "#E9E9E9" }}>
        <Navbar />

        <div
          style={{ padding: "80px 0" }}
          className=" d-flex justify-content-center font-bold display-3"
        >
          <h3 style={{ maxWidth: "50%" }} className="text-center">
            We Revolutionalise Commerce with Seamless Peer-to-Peer Transactions
          </h3>
        </div>
      </div>
      {/* banner Part End  */}

      {/* Product Category */}
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        autoplay={{ delay: 1000 }}
        style={{ padding: "80px 0", marginTop: "110px", marginBottom: "30px" }}
        className="mySwiper mx-md-5"
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
      {/* Product Category End */}

      {/* Products */}
      <div style={{ background: "#EDEDED", padding: "80px 0" }}>
        <div className="container-fluid">
          <div className="row mx-md-5 align-items-center justify-content-center">
            <h3>Listings close to you</h3>
            {productsData.map((products) => (
              <div key={products.id} className="col-md-4 col-lg-3 mt-3">
                <div className="card product-cards">
                  <img
                    src={products.imagePath}
                    className="img-fluid"
                    alt={products.name}
                    style={{ borderRadius: "0" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{products.name}</h5>
                    <p className="card-text product-price fw-bold">
                      # {formatPrice(products.price)}{" "}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Products End */}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
