import facebookLogo from "../../assets/facebooklogo.svg";
import home from "../../assets/home.svg";
import users from "../../assets/users.svg";
import video from "../../assets/video.svg";
import store from "../../assets/store.svg";
import groups from "../../assets/groups.svg";
import menu from "../../assets/menu.svg";
import bell from "../../assets/bell.svg";
import profile from "../../assets/profile.jpg";
import arrow from "../../assets/arrow.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
  return (
    <div className="main-container">
      <div className="content">
        <img src={facebookLogo} alt="Facebook Logo" />
        <div className="wrapper">
          <div className="icon">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          <input className="input" type="text" placeholder="Search Facebook" />
        </div>
        <div className="nav-list">
          <div className="icon-container">
            <img src={home} alt="Home" className="home" />
          </div>
          <div className="icon-container">
            <img src={users} alt="Friends" className="users" />
          </div>
          <div className="icon-container">
            <img src={video} alt="Videos" className="videos" />
          </div>
          <div className="icon-container">
            <img src={store} alt="Marketplace" className="store" />
          </div>
          <div className="icon-container">
            <img src={groups} alt="Groups" className="groups" />
          </div>
        </div>
        <div className="other-nav">
          <div className="nav-container">
            <img src={menu} alt="Menu" className="menu" />
          </div>
          <div className="nav-container">
            <img src={bell} alt="Notification" className="bell" />
          </div>
          <div className="profile-container">
            <img src={profile} alt="Profile" className="profile" />
            <div className="arrow-container">
              <img src={arrow} alt="Arrow" className="arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
