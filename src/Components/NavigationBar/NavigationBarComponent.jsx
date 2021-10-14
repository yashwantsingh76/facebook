import React from "react";
import appLogo from "../../assets/facebooklogo.svg";
import avatar from "../../assets/avatar.png";

import { AiFillHome, AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineShop } from "react-icons/ai";
import {
  IoMdPeople,
  IoIosNotifications,
  IoMdArrowDropdown,
} from "react-icons/io";
import { MdMonitor } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BsMessenger } from "react-icons/bs";

import '../../Utils/styles.css'
export default function NavigationBarComponent() {
  return (
    <div
      style={{
        height: 'auto',
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img style={{ height: 60, width: 60 }} src={appLogo} alt="no logo" />
        <input
          placeholder="Search"
          style={{ height: 40, width: 280, borderRadius: 35 }}
        />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className="topTabButtons">
          <AiFillHome size={28} className="topTabButtons-icon" />
        </div>
        <div className="topTabButtons">
          <IoMdPeople size={28} className="topTabButtons-icon" />
        </div>
        <div className="topTabButtons">
          <AiOutlineShop size={28} className="topTabButtons-icon" />
        </div>
        <div className="topTabButtons">
          <MdMonitor size={28} className="topTabButtons-icon" />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          width: 300,
        }}
      >
          <div className="" style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
            <CgProfile size={28} className="topTabButtons-icon" />
            <p>Yashwant Singh</p>
        </div>
        <div className="topTabRightButtons">
          <AiOutlineMenuUnfold size={28} className="topTabButtons-icon" />
        </div>
        <div className="topTabRightButtons">
          <BsMessenger size={28} className="topTabButtons-icon" />
        </div>
        <div className="topTabRightButtons">
          <IoIosNotifications size={28} className="topTabButtons-icon" />
        </div>
        <div className="topTabRightButtons">
          <IoMdArrowDropdown size={28} className="topTabButtons-icon" />
        </div>
      </div>
    </div>
  );
}
