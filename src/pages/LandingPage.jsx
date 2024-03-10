import React from "react";
import Navbar from "../components/Navbar";

const LandingPage = () => {
  return (
    <div>
      {/* banner Part  */}
      <div style={{ background: "#E9E9E9" }}>
        <Navbar />
        <div className=" d-flex justify-content-center font-bold display-3">
          <h3 className="w-md-50 p-5 text-center">
            We Revolutionalise Commerce with Seamless Peer-to-Peer Transactions
          </h3>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
