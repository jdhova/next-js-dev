import React from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.css';
import foodStyles from '../styles/Food.module.css';
import img1 from "./images/download.jpg";
import img2 from "./images/chaat.jpg";
import img3 from "./images/samosa.jpg";
import img4 from "./images/Naan.jpg";
import img5 from "./images/ch.jpg";

import img6 from "./images/dosa.jpg";
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col } from "reactstrap";

const food = () => {
  return (
    <div className={`container-fluid my-5 py-5 ${foodStyles.food}`}>
      <Row>
        <Col>
            <div className="justify-content-center">
              <Image alt="description of image" src={img1} height={'264.87'} width={'397.12'} /></div>


            <div className="card-body text-center h3">Mix Dish</div>
            <button className="btn btn-primary btn-block"> Order Now</button>

        </Col>
        <Col>
          <div className="justify-content-center">
            <Image alt="description of image" src={img2} className={'rounded'} height={'264.87'} width={'397.12'}  />
          </div>
          <div className="card-body text-center h3">Chaat</div>
          <button className="btn btn-primary btn-md">Order Now</button>
        </Col>
        <Col>
          <div className="justify-content-center">
            <Image alt="description of image" src={img3} className={'rounded'} height={'264.87'} width={'397.12'} />
          </div>
          <div className="card-body text-center h3">Samosa</div>
          <button className="btn btn-primary btn-md">Order Now</button>
        </Col>
        <div className="w-100"></div>
        <Col>
          <div className="justify-content-center">
            <Image alt="description of image" src={img4} className={'rounded'}height={'264.87'} width={'397.12'}  />
          </div>
          <div className="card-body text-center h3">Naan</div>
          <button className="btn btn-primary btn-md">Order Now</button>
        </Col>
        <Col>
          <div className="justify-content-center">
            <Image alt="description of image" src={img5} className={'rounded'} height={'264.87'} width={'397.12'} />
          </div>
          <div className="card-body text-center h3">Chole</div>
          <button className="btn btn-primary btn-md"> Order Now</button>
        </Col>
        <Col>
          <div className="justify-content-center">
            <Image alt="description of image" src={img6} className={'rounded'} height={'264.87'} width={'397.12'} />
          </div>
          <div className="card-body text-center h3">Dosa</div>
          <button className="btn btn-primary btn-md">Order Now</button>
        </Col>
      </Row>
    </div>
  )
}

export default food