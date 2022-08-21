import React from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.css';
import drinksStyles from '../styles/Drinks.module.css';
import img1 from "./images/t-nuts.jpeg";
import img2 from "./images/zobo.jpeg";
import img3 from "./images/ginger.jpeg";
import img4 from "./images/aam.jpg";
import img5 from "./images/aam.jpg";
import img6 from "./images/coffee.jpg";
import { Row, Col, Nav } from "reactstrap";

const drinks = () => {
  return (

    <div className={`container-fluid my-5 py-5 ${drinksStyles.div}`}>
      <Row>
        <Col>
          <div className="justify-content-center">
            <Image alt="description of image" src={img1} className={'rounded'}/>
          </div>
          <div className="card-body text-center h3">T nuts</div>
          <button className="btn btn-primary btn-block">Order Now</button>
        </Col>
        <Col>
          <div className="justify-content-center">
            <Image alt="description of image" src={img2} className={'rounded'} />
          </div>
          <div className="card-body text-center h3">Zobbo</div>
          <button className="btn btn-primary btn-md">Order Now</button>
        </Col>
        <Col>
          <div className="justify-content-center">
            <Image alt="description of image" src={img3} className={'rounded'} />
          </div>
          <div className="card-body text-center h3">Kunu</div>
          <button className="btn btn-primary btn-md">Order Now</button>
        </Col>
        <div className="w-100"></div>
        <Col>
          <div className="justify-content-center ">
            <Image alt="description of image" src={img4} className={'rounded'} />
          </div>
          <div className="card-body text-center h3">Ginger</div>
          <button className="btn btn-primary btn-md">Order Now</button>
        </Col>
        <Col>
          <div className="justify-content-center ">
            <Image alt="description of image" src={img5} className={'rounded'} />
          </div>
          <div className="card-body text-center h3">Ginger and Garlic</div>
          <button className="btn btn-primary btn-md">Order Now</button>
        </Col>
        <Col>
          <div className="justify-content-center ">
            <Image alt="description of image" src={img6} className={'rounded'} />
          </div>
          <div className="card-body text-center h3">Coffee</div>
          <button alt="description of image" className="btn btn-primary btn-md">Order Now</button>
        </Col>
      </Row>
    </div>
  )
}

export default drinks