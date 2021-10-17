import React from "react";
import "./SubFooter.css";
import { MdOutlineColorLens } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import { BsShieldLock } from "react-icons/bs";
import { BiChat } from "react-icons/bi";

const SubFooter = () => {
  return (
    <div className="subFooter">
      <div className="subFooter__container">
        <div className="subfooter__box">
          <MdOutlineColorLens />
          <div className="subfooter__text">
            <h2>Salom</h2>
            <p>Lorem ipsum dolor adipisicing elit.</p>
          </div>
        </div>
        <div className="subfooter__box">
          <FaShippingFast />
          <div className="subfooter__text">
            <h3>Salom</h3>
            <p>Lorem ipsum dolor adipisicing elit.</p>
          </div>
        </div>
        <div className="subfooter__box">
          <BsShieldLock />
          <div className="subfooter__text">
            <h2>Salom</h2>
            <p>Lorem ipsum dolor adipisicing elit.</p>
          </div>
        </div>
        <div className="subfooter__box">
          <BiChat />
          <div className="subfooter_text">
            <h2>Salom</h2>
            <p>Lorem ipsum dolor adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubFooter;
