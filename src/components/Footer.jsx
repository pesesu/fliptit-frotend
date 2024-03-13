const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div
      style={{ color: "#444444" }}
      className="container-fluid mt-4 mb-5 footer-text"
    >
      <div className="mx-md-5  row justify-content-center align-items-center">
        <div className="col-md-3">
          <p className="fw-bold mb-4">About Us</p>
          <p>About FlipIt</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Billing Policy</p>
          <p>Cookie Policy</p>
        </div>
        <div className="col-md-3">
          <p className="fw-bold mb-4">Support</p>
          <p>support@flipit.com</p>
          <p>Safety Tips</p>
          <p>Contact Us</p>
          <p>FAQ</p>
          <p style={{ opacity: "0" }}>hidden</p>
        </div>
        <div className="col-md-3">
          {/* <p className="fw-bold mb-4">About Us</p> */}
          {/* <p>About FlipIt</p> */}
          {/* <p>Terms & Conditions</p> */}
          {/* <p>Privacy Policy</p> */}
          {/* <p>Billing Policy</p> */}
          {/* <p>Cookie Policy</p> */}
        </div>
        <div className="col-md-3"></div>
      </div>
      <div className="row mx-md-5 mt-2">
        <p className="">&copy;{currentYear} FlipIt.com</p>
      </div>
    </div>
  );
};

export default Footer;
