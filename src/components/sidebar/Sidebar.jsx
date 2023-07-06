import { Link } from "react-router-dom";
import "./sidebar.css";
import imageSrc1 from "../../assets/ecw-img/3.jpeg";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">SUBMIT YOUR WORK</span>
        <img className="headerImg" src={imageSrc1} alt="Our img" />
        <p>
          If you have a thing for writing, then reach to us and get published.
          Submit your literary works (poems, essays, articles, quotations or any
          other write up). Be a part of the community.
        </p>
        <p>Mail us at: englishclubnith@gmail.com</p>
      </div>
    </div>
  );
}
