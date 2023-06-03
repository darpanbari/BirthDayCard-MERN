import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from 'axios'
import moment from "moment";


const AdminDashboard = () => {
  const [birthdayList, setBirthdayList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {

      const currentMonth = moment().format("M");
      console.log(currentMonth);

      const fromDate = `2023-${currentMonth}-01`;
      const toDate = `2023-${currentMonth}-30`;
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
        <div className="background-image">
          <div >
        

            <div className="m-5 p-5">
              <Row sm={2} md={3} lg={4} xl={5}  className="g-4">
              {birthdayList.map((b, i) => {
                  return (
                    <Col key={i}>
                      <Card
                        style={{
                          padding: "20px 0px",
                          background: "#60B99D",
                          border: "none",
                         
                        }}
                        className="shadow-lg p-2 card_color"
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
                          <Card.Title className="text-center shadow-sm py-1" style={{color:"#B8E7E1"}}>
                            {b.name}
                          </Card.Title>
                          <Card.Text className="text-center fst-italic text-white my-2">
                            It,s Your Special Day !
                          </Card.Text>
                          <Card.Text className="text-center fw-bold" style={{color:"#116D6E"}}>
                            DOB: -{new Date(b.birthdate).toLocaleDateString()}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
