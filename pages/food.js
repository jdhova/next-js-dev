import React from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.css';
import foodStyles from '../styles/Food.module.css';
import img1 from "./images/abacha.jpeg";
import img2 from "./images/okpa.jpeg";
import img3 from "./images/moi.jpeg";
import img4 from "./images/rns.jpeg";
import img5 from "./images/jelloff.jpeg";

import img6 from "./images/fried.jpeg";
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col } from "reactstrap";

const food = () => {
  return (
    <div className={`container-fluid my-5 py-5 ${foodStyles.food}`}>
      <Row>
        <Col>
            <div className="justify-content-center">
              <Image alt="description of image" src={img1} height={'264.87'} width={'397.12'} /></div>


            <div className="card-body text-center h3">Abacha</div>
            <button className="btn btn-primary btn-block"> Order Now</button>

        </Col>
        <Col>
          <div className="justify-content-center">
            <Image alt="description of image" src={img2} className={'rounded'} height={'264.87'} width={'397.12'}  />
          </div>
          <div className="card-body text-center h3">Okpa</div>
          <button className="btn btn-primary btn-md">Order Now</button>
        </Col>
        <Col>
          <div className="justify-content-center">
            <Image alt="description of image" src={img3} className={'rounded'} height={'264.87'} width={'397.12'} />
          </div>
          <div className="card-body text-center h3">Moi Moi</div>
          <button className="btn btn-primary btn-md">Order Now</button>
        </Col>
        <div className="w-100"></div>
        <Col>
          <div className="justify-content-center">
            <Image alt="description of image" src={img4} className={'rounded'}height={'264.87'} width={'397.12'}  />
          </div>
          <div className="card-body text-center h3">Rice and Stew</div>
          <button className="btn btn-primary btn-md">Order Now</button>
        </Col>
        <Col>
          <div className="justify-content-center">
            <Image alt="description of image" src={img5} className={'rounded'} height={'264.87'} width={'397.12'} />
          </div>
          <div className="card-body text-center h3">Jelloff Rice</div>
          <button className="btn btn-primary btn-md"> Order Now</button>
        </Col>
        <Col>
          <div className="justify-content-center">
            <Image alt="description of image" src={img6} className={'rounded'} height={'264.87'} width={'397.12'} />
          </div>
          <div className="card-body text-center h3">Fried Rice</div>
          <button className="btn btn-primary btn-md">Order Now</button>
        </Col>
      </Row>
    </div>
  )
}

export default food