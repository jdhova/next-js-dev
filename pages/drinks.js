import React from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.css';
import drinksStyles from '../styles/Drinks.module.css';
import img1 from "./images/chai.jpg";
import img2 from "./images/lassi.jpg";
import img3 from "./images/jaljeera.jpg";
import img4 from "./images/thandai.jpg";
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
          <div className="card-body text-center h3">Chai</div>
          <button className="btn btn-primary btn-block">Order Now</button>
        </Col>
        <Col>
          <div className="justify-content-center">
            <Image alt="description of image" src={img2} className={'rounded'} />
          </div>
          <div className="card-body text-center h3">Lassi</div>
          <button className="btn btn-primary btn-md">Order Now</button>
        </Col>
        <Col>
          <div className="justify-content-center">
            <Image alt="description of image" src={img3} className={'rounded'} />
          </div>
          <div className="card-body text-center h3">Jaljeera</div>
          <button className="btn btn-primary btn-md">Order Now</button>
        </Col>
        <div className="w-100"></div>
        <Col>
          <div className="justify-content-center ">
            <Image alt="description of image" src={img4} className={'rounded'} />
          </div>
          <div className="card-body text-center h3">Thandai</div>
          <button className="btn btn-primary btn-md">Order Now</button>
        </Col>
        <Col>
          <div className="justify-content-center ">
            <Image alt="description of image" src={img5} className={'rounded'} />
          </div>
          <div className="card-body text-center h3">Panna</div>
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