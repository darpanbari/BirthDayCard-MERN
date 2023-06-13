import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import moment from "moment";
import { useLocation } from "react-router-dom";

const UserDashboard = () => {
  const [birthdayList, setBirthdayList] = useState([]);

  const [userName, setUserName] = useState([])

  const location = useLocation();
  const user = location.state.user;

  useEffect(() => {
    if (user) {
      setUserName(user);
    }
  }, []);
  console.log(userName);

  useEffect(() => {
    const fetchData = async () => {
      // const currentMonth = moment().format("M");
      // console.log(currentMonth);

      const fromDate = moment().startOf("month").format("YYYY-MM-DD");
      const toDate = moment().endOf("month").format("YYYY-MM-DD");
      console.log(fromDate);

      try {
        const { data } = await axios.get(
          `http://localhost:2020/api/hr/all-birthday-list/${fromDate}/${toDate}`
        );
        console.log(data.data);
        setBirthdayList(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div>
        <div
          className="d-flex main_container"
          style={{ background: "#60B99D", height: "100vh" }}//width: "92.2vw"
        >
          <div
            className=" shadow-sm p-4 "
            style={{ background: "#E3F4F4", height: "100%", width: "50%" }}
          >
            <Row
              sm={1}
              md={2}
              lg={3}
              className="g-4 background-image mt-1"
              style={{
                width: "100%",
                padding: "100px 0px 100px 20px",
                height: "80%",
              }}
            >
              {birthdayList.map((b, i) => {
                return (
                  <Col key={i}>
                    <Card
                      style={{
                        padding: "20px 0px",
                        background: "#60B99D",
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
                          className="text-center shadow-sm py-1"
                          style={{ color: "#E3F4F4" }}
                        >
                          {b.name}
                        </Card.Title>
                        <Card.Text
                          className="text-center fst-italic mb-0"
                          style={{ color: "#B8E7E1" }}
                        >
                          It,s Your Special Day !
                        </Card.Text>
                        <Card.Text
                          className="text-center fw-bold"
                          style={{ color: "#116D6E" }}
                        >
                          DOB:-{new Date(b.birthdate).toLocaleDateString()}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </div>

          <Row
            className="g-4 background-image-2 shadow text"
            style={{
              margin: "auto",
              width: "44%",
              height: "70%",
            }}
          >
            
                <Col
                  
                  className="d-flex flex-row"
                  style={{ margin: "92px 0px" }}
                >
                  <Card
                    style={{
                      padding: "20px 0px 20px 0px",
                      border: "none",
                      width: "860px",
                      background: "none",
                      marginLeft: "250px",
                      marginTop: "30px",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src="back.jpg"
                      className="m-auto"
                      style={{
                        borderRadius: "50%",
                        height: "120px",
                        width: "120px",
                      }}
                    />
                    <Card.Body>
                      <Card.Title className="text-center text-success fs-1">
                        {userName.name}
                      </Card.Title>
                      <Card.Text className="text-center text-warning fs-4 fst-italic px-5">
                        “Count not the candles…see the lights they give. Count
                        not the years, but the life you live. Wishing you a
                        wonderful time ahead.”<br></br>
                        <span className="text-danger">Happy birthday ||{userName.name}||</span>
                      </Card.Text>
                      <Card.Text className="text-center fw-bold text-success">
                        Date Of Birth: {new Date(userName.birthdate).toLocaleDateString()}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
        
          </Row>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
