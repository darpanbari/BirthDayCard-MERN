import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import moment from "moment";
import SideNav from "../components/SideNav";
import AdminDashboard from "./AdminDashboard";

const JoiningAdmin = () => {
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
    <div>
    <SideNav/>
    </div>
    <div  style={{  background: "#CFF5E7", marginLeft:"9%"}}><AdminDashboard/></div>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{  background: "#CFF5E7", padding:"0% 60px", marginLeft:"10%"}} //, height:"100vh"
      >
        <Row>

{/* second container */}
          <Col className="background-image" style={{height:"auto"}} >
            <Row sm={2} md={3} lg={5} xl={5} className="g-5 m-auto py-5">
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
                        className="m-auto"
                        style={{
                          borderRadius: "50%",
                          height: "80px",
                          width: "80px",
                        }}
                      />
                      <Card.Body className="p-0">
                        <Card.Title
                          className="text-center shadow-sm py-1 fst-italic"
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
                          Joining Date:-
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

export default JoiningAdmin;
