import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
  const { name, img, Designation, id } = service;
  return (

    <div className="col ">
      <div className="card ">
        <img src={img} className="card-img-top  " alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p><b>{Designation}</b></p>
          <div className='button'>
            <Link to={`/information/${id}`}><button className=' btn btn-success  '>Details </button></Link>
          </div>

        </div>
      </div>
    </div>

  );
};

export default Service;