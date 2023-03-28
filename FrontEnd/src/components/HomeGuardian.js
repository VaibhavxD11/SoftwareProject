import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Select from 'react-select';
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomePage.css";

const HomeGuardian = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const Categories = [
    { label: "Food", value: 1 },
    { label: "Medicine", value: 2 },
    { label: "Checkup", value: 3 },
    { label: "Phone Number", value: 4 },
    { label: "Excerise", value: 5 }
  ]

  const Popup = () => {
    return (
      <>
        <div className="modal-wrapper" onClick={closeModal}></div>
        <div className="modal-container">
          <br></br>
          <h3>Details for Elder</h3>
          <form>
            <label>
              <span>Select Category</span>
              <Select options={techCompanies} />
            </label>
          </form>
          {/* <h2>Emergency Contact Numbers</h2>

          <br></br>
          <table id="customers">
            <tr>
              <th>Name</th>
              <th>Contact No.</th>
              <th>Location</th>
            </tr>
            <tr>
              <td>Police (cops)</td>
              <td>100</td>
              <td>Jaipur</td>
            </tr>
            <tr>
              <td>Ambulance</td>
              <td>102</td>
              <td>Jodhpur</td>
            </tr>
            <tr>
              <td>Doctor</td>
              <td>8797988979</td>
              <td>Delhi</td>
            </tr>
            <tr>
              <td>Fire / rescue</td>
              <td>101</td>
              <td>Andhra pradesh</td>
            </tr>
          </table>

          <br></br> */}
          <div className="button-for-card">
            <button onClick={closeModal} className="modal-done-btn">
              Close
            </button>
          </div>
        </div>
      </>
    );
  };


  

  return (
    <>
      <Container fluid>
        <Row className="main-row-home-1 ">
          {/* //EMERGENCY contact number */}
          <Col className="col-1" xs={12} sm={12} md={6} lg={4}>
            <center>
              <img
                src="sos.jpg"
                alt="sos image"
                className="card-image img-fluid"
                onClick={() => setShowModal(true)}
              ></img>

              {showModal && <Popup />}
            </center>
          </Col>

          <Col className="col-1" xs={12} sm={12} md={6} lg={4}>
            <center>
              <img
                src="med.jpg"
                alt="medicine image"
                className="card-image img-fluid"
                onClick={() => setShowModal(true)}
              ></img>
              {showModal && <Popup />}
            </center>
          </Col>

          <Col className="col-1" xs={12} sm={12} md={6} lg={4}>
            <center>
              <img
                src="food.jpg"
                alt="food image"
                className="card-image img-fluid"
                onClick={() => setShowModal(true)}
              ></img>
              {showModal && <Popup />}
            </center>
          </Col>

          <Col className="col-1" xs={12} sm={12} md={6} lg={4}>
            <center>
              <img
                src="checkup.png"
                alt="food image"
                className="card-image img-fluid"
                onClick={() => setShowModal(true)}
              ></img>
              {showModal && <Popup />}
            </center>
          </Col>


          <Col className="col-1" xs={12} sm={12} md={6} lg={4}>
            <center>
              <img
                src="family.png"
                alt="food image"
                className="card-image img-fluid"
                onClick={() => setShowModal(true)}
              ></img>
              {showModal && <Popup />}
            </center>
          </Col>

          <Col className="col-1" xs={12} sm={12} md={6} lg={4}>
            <center>
              <img
                src="yoga.jpeg"
                alt="food image"
                className="card-image img-fluid"
                onClick={() => setShowModal(true)}
              ></img>
              {showModal && <Popup />}
            </center>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeGuardian;
