import "./ConvoSettings.css";
import girl1 from "../../assets/girl1.jpg";
import user from "../../assets/user-circle.svg";
import bell2 from "../../assets/bell2.svg";
import arrow from "../../assets/arrow.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const ConvoSettings = () => {
  return (
    <div className="settings-main-container">
      <div className="settings-content">
        <div className="settings-top">
          <img src={girl1} alt="" />
          <h3>Bebegirl 😍</h3>
          <div className="options-container">
            <div className="label">
              <div className="options">
                <img src={user} alt="" />
              </div>
              <p>Profile</p>
            </div>
            <div className="label">
              <div className="options">
                <img src={bell2} alt="" />
              </div>
              <p>Mute</p>
            </div>
            <div className="label">
              <div className="options">
                <i>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </i>
              </div>
              <p>Search</p>
            </div>
          </div>
        </div>
        <div className="list-menu">
          <div className="chat">
            <h3>Chat info</h3>
            <img src={arrow} alt="" />
          </div>
          <div className="chat">
            <h3>Customize Chat</h3>
            <img src={arrow} alt="" />
          </div>
          <div className="chat">
            <h3>Media, files and links</h3>
            <img src={arrow} alt="" />
          </div>
          <div className="chat">
            <h3>Privacy & support</h3>
            <img src={arrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConvoSettings;
