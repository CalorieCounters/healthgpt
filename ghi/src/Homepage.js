function Homepage() {
  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        {/* <h1 className="display-5 fw-bold">HealthGPT</h1> */}
        <img
          src="HealthGPT.png"
          style={{ display: "block", margin: "0 auto" }}
        />
        <div className="col-lg-6 mx-auto">
          <p
            className="lead mb-4"
            style={{ marginTop: "25px", marginBottom: "25px" }}
          >
            Our mission is to empower individuals to take controls of their
            health and wellness by providing personalized solutions that help
            them achieve their goals. If you want to be sexy like Brad Sign up
            now!
          </p>
        </div>
        {/* </div>
      <div
        className="d-flex justify-content-center"
        style={{ marginBottom: "150px" }}
      > */}
        <button className="btn btn-secondary mx-5">Login</button>
        <button className="btn btn-secondary mx-5">Sign-up</button>
      </div>
    </>
  );
}

export default Homepage;
