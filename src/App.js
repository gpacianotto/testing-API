import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Row, Col, Button } from 'reactstrap';
import { useState } from 'react';
import axios from 'axios';

function App() {

  const [data, setData] = useState({});

  const [stringfied, setStringFied] = useState("");

  return (
    <Row style={{height: "100vh", backgroundColor: 'black'}}>
      <Col xl="12">

        <Row>
          <Col xl="4">
           <p style={{color: "white"}}>{stringfied}</p>
          </Col>
            <Col className='text-center' xl="4">
              <Button onClick={async () => {
                await axios.get("http://localhost:3000/test-api").then((response) => {
                  console.log(response);
                  setData(response);
                  setStringFied(JSON.stringify(response));
                })
              }}>
                Fazer GET
              </Button>
            </Col>
          <Col xl="4">
          
          </Col>
        </Row>



      </Col>
    </Row>
  );
}

export default App;
