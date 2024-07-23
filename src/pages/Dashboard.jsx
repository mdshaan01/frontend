import React, { useState ,useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/mainContent';
import axios from 'axios';
import { BaseUrl } from '../config/baseurl';

function Dashboard() {
  const [data,setData] = useState(null);

  // const handleProductClick = () => {
  //   setShowProductList(true);
  // };

  useEffect(() => {
    mainContentData()
},[])

  const mainContentData = async(req, res) => {
    try {
      const resp = await axios.get(`${BaseUrl}/dashboard/alldata`);
      if (resp.status == 200) {
        setData(resp.data.data)
      }
  } catch (error) {
      console.log(error)
  }
}

  

  return (
    <Container fluid>
      <Row>
        <Col md={2}>
          <Sidebar />
        </Col>
        <Col md={10}>
         {/* showProductList={showProductList}  */}
          { data && (<MainContent data = {data}  />) }
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;

