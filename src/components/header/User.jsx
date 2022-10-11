import React from "react";
import "./User.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
import self from "../../assets/images/self.jpg";
import { RiImageAddLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { BsBagCheck } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { GrHelp } from "react-icons/gr";
import { BiLogOut } from "react-icons/bi";

export const User = () => {
  return (
    <>
      <div className="profile">
        <button className="img">
          <img src={logo} alt="pexels" />
        </button>
        <div className="openProfile boxItems">
          <Link to="account">
            <div className="image">
              <div className="img">
                <img src={self} alt="logo2" />
              </div>
              <div className="text">
                <h4>Gurprem Bhullar</h4>
                <p>Norwalk, CT</p>
              </div>
            </div>
          </Link>
          <Link to="/create">
            <button className="box">
              <RiImageAddLine className="icon"/>
              <h4>Create Post</h4>
            </button>
          </Link>
          <button className="box">
              <IoSettingsOutline className="icon"/>
              <h4>My Account</h4>
            </button>
          <button className="box">
            <BsBagCheck className="icon" />
            <h4>My Order</h4>
          </button>
          <button className="box">
            <AiOutlineHeart className="icon" />
            <h4>Wishlist</h4>
          </button>
          <button className="box">
            <GrHelp className="icon" />
            <h4>Help</h4>
          </button>
          <button className="box">
            <BiLogOut className="icon" />
            <h4>Log Out</h4>
          </button>
        </div>
      </div>
    </>
  );
};
