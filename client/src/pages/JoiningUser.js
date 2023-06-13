import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import moment from "moment";
import SideNav from "../components/SideNav";
import UserDashboard from "./UserDashboard";


const JoiningUser = () => {
  const [joiningDate, setJoiningDate] = useState([]);

  const fromDate = moment().startOf("month").format("YYYY-MM-DD");
  const toDate = moment().endOf("month").format("YYYY-MM-DD");

  const getJoiningDate = () => {
    const { data } = axios
      .get(
        `http://localhost:2020/api/hr/all-joining-date/${fromDate}/${toDate}`
      )
      .then((data) => {
        console.log(data.data.data);
        setJoiningDate(data.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getJoiningDate();
  }, []);

  return (
    <>
    <SideNav/>
    <div style={{background: "#CFF5E7", height:"100vh", marginLeft:"10%"}}><UserDashboard/></div>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{  background: "#CFF5E7", height:"100vh", marginLeft:"10%" }}
      >
        <Row className="">
{/* first container */}
        <Col sm={6} className="m-auto" style={{height:"auto"}} >
            <Row className=" justify-content-center shadow mx-5">
            <div className="border-4 joining-image"></div>
            <Col className="d-flex flex-row my-auto p-0" >
              <Card className="border-0 rounded-0 py-3 d-flex flex-row" style={{background:"#FFFFFF",}} 
              >
                <div className="d-flex ps-5">
                <Card.Img
                  variant="top"
                  src="back.jpg"
                  className="m-auto rounded-0"
                  style={{
                  
                    height: "150px",
                    width: "150px",
                  }}
                /></div>
                <div>
                <Card.Body>
                  <Card.Title className="text-center fs-1">
                    DARPAN
                  </Card.Title>
                  <Card.Text className="text-center text-danger fs-4 fst-italic px-2">
                    “Good luck with your new adventure! It's been a real pleasure working for you over the past few years.”<br></br>

                  </Card.Text>
                  <Card.Text className="text-center fw-bold text-success">
                     Joining Date:
                  </Card.Text>
                </Card.Body>
                </div>
              </Card>
            </Col>
            </Row>
          </Col>

{/* second container */}
          <Col sm={5} className="background-image me-5" style={{height:"auto"}} >
            <Row sm={1} md={2} lg={2} xl={2} xxl={3} className="g-4 m-auto py-5">
              {joiningDate.map((j, i) => {
                return (
                  <Col key={i}>
                    <Card
                      style={{
                        padding: "20px 0px",
                        background: "#867FDF",
                        border: "none",
                      }}
                      className="shadow p-2 card_color"
                    >
                      <Card.Img
                        variant="top"
                        src="back.jpg"
                        className="m-auto rounded-0"
                        style={{
                         
                          height: "60px",
                          width: "60px",
                        }}
                      />
                      <Card.Body className="p-0">
                        <Card.Title
                          className="text-center shadow-sm py-1 fst-italic m-0"
                          style={{ color: "#F3E8FF" }}
                        >
                          {j.name}
                        </Card.Title>
                        <Card.Text
                          className="text-center fst-italic mb-0"
                          style={{ color: " #97DECE" }}
                        >
                          It,s Your Joining Day !
                        </Card.Text>
                        <Card.Text
                          className="text-center fw-bold"
                          style={{ color: "#E5E0FF" }}
                        >
                          Joining :-
                          {new Date(j.joiningDate).toLocaleDateString()}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Col>
              
          
        </Row>
      </div>
    </>
  );
};

export default JoiningUser;
