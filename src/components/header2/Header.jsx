import "./header.css";
import imageSrc from "../../assets/ecw-img/4.jpeg";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">NIT Hamirpur</span>
        <span className="headerTitleLg">English Club</span>
      </div>
      <img className="headerImg" src={imageSrc} alt="Club img" />
    </div>
  );
}
