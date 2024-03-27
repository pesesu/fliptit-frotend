import React from 'react'
import { productsData } from "../components/CardsData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CategoryPage = () => {
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
    <div style={{ background: "#E9E9E9" }}>
        <div >
            <Navbar />
        </div>
        <div className="container-fluid mx-md-5 py-3">
            <h4 class="mt-md-2 mb-4" style={{fontWeight:"700"}}>Electronics</h4>
            <div className="sub-categories d-flex flex-wrap gap-4 mt-4 mt-md-3" style={{fontWeight:500}}>
                <a href="">Phone & Accessories</a>
                <a href="">Camera & photograpy</a>
                <a href="">Computers & Laptops</a>
                <a href="">Audio & Headpones</a>
                <a href="">Wearable Technology</a>
            </div>
            {/* <hr  className='my-4 d-lg-none'/> */}
            <div className="price-filter d-flex gap-2 align-items-center pt-1 pt-lg-0 mt-4 mt-md-3">
                <div>Price:</div>
                <input class="price-filter-input" id="min-price" type="text" />
                <div style={{width:7, height:3, background:"#444444"}}  className="filter-sep"></div>
                <input class="price-filter-input"  id="max-price" type="text" />
            </div>
        </div>
        {/* Products */}

        <div style={{padding: "40px 0 60px" }} className="container-fluid">
          <div className="row g-4 mx-1 mx-md-5 align-items-center justify-content-center">
            <h4 style={{fontWeight:600, lineHeight:0}}><span style={{fontWeight:400}} className='page-cat-nam'>Electronics</span> near you</h4>
            {productsData.map((products) => (
              <div key={products.id} className="col-sm-6 col-md-4 col-lg-3 mb-2">
                <div className="card product-cards shadow-sm">
                  <img
                    src={products.imagePath}
                    className="listing-img"
                    alt={products.name}
                    style={{ borderRadius: "0" }}
                  />
                  <div className="card-body pb-1">
                    <h5 className="card-title fs-6 fw-normal lh-1">
                      {products.name}
                    </h5>
                    <div className="d-flex justify-content-between align-items-start p-0 m-0">
                      <p className="product-price fw-semibold lh-1">
                        &#8358; {formatPrice(products.price)}{" "}
                      </p>
                      <div className="d-flex align-items-center gap-1">
                        <div
                          style={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            background: "#444444",
                          }}
                        ></div>
                        <div className="fw-semibold">
                          <small>2 KM</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="d-flex justify-content-center mt-5">
            <a className="" href="#">
              <button type="button" class="btn btn-dark navbar-button">
                See More
              </button>
            </a>
          </div> */}
          
        </div>
      {/* Products End */}
      {/* Footer */}
      <div className="footer-border">
        <Footer />
      </div>
      {/* Footer End */}
    </div>
  );
}

export default CategoryPage