import "./Chats.css";
import dots from "../../assets/dots.svg";
import edit from "../../assets/edit.svg";
import girl1 from "../../assets/girl1.jpg";
import girl2 from "../../assets/girl2.jpg";
import girl3 from "../../assets/girl3.jpg";
import girl4 from "../../assets/girl4.jpg";
import girl5 from "../../assets/girl5.jpg";
import girl6 from "../../assets/girl6.jpg";
import girl7 from "../../assets/girl7.jpg";
import download from "../../assets/download.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Chats = () => {
  return (
    <div className="chat-main-container">
      <div className="chat-content">
        <div className="top">
          <h2>Chats</h2>
          <div className="chat-menu">
            <div className="dot-container">
              <img src={dots} alt="Menu" />
            </div>
            <div className="dot-container">
              <img src={edit} alt="Edit" />
            </div>
          </div>
        </div>
        <div className="chat-wrapper">
          <div className="chat-icon">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          <input
            className="chat-input"
            type="text"
            placeholder="Search Messenger"
          />
        </div>
        <div className="extra-menu">
          <div className="back">
            <h3>Inbox</h3>
          </div>
          <div className="back1">
            <h3>Communities</h3>
          </div>
        </div>
        <div className="convo-container">
          <div className="convo-image1">
            <img src={girl1} alt="Profile" />
            <div className="convo-message1">
              <p className="name">Bebegirl 😍</p>
              <p className="message1">
                ... <span>• 1m</span>
              </p>
            </div>
          </div>
          <div className="convo-image">
            <img src={girl2} alt="Profile" />
            <div className="message-container">
              <div className="convo-message">
                <p className="name">Beyb 😍🥰</p>
                <p className="message">
                  Hello beyb~ 🥰 <span>• 3m</span>
                </p>
              </div>
              <div className="blue-circle"></div>
            </div>
          </div>
          <div className="convo-image">
            <img src={girl3} alt="Profile" />
            <div className="message-container">
              <div className="convo-message">
                <p className="name">Love 🧡</p>
                <p className="message">
                  Hey love~ 💚 <span>• 1h</span>
                </p>
              </div>
              <div className="blue-circle"></div>
            </div>
          </div>
          <div className="convo-image">
            <img src={girl4} alt="Profile" />
            <div className="message-container">
              <div className="convo-message">
                <p className="name">Beybi 👶</p>
                <p className="message">
                  Love? 💖 <span>• 2h</span>
                </p>
              </div>
              <div className="blue-circle"></div>
            </div>
          </div>
          <div className="convo-image">
            <img src={girl5} alt="Profile" />
            <div className="message-container">
              <div className="convo-message">
                <p className="name">Mahal 💝</p>
                <p className="message">
                  Love you mahal 💞 <span>• 3h</span>
                </p>
              </div>
              <div className="blue-circle"></div>
            </div>
          </div>
          <div className="convo-image">
            <img src={girl6} alt="Profile" />
            <div className="message-container">
              <div className="convo-message">
                <p className="name">Langga ❣</p>
                <p className="message">
                  I love you! 🥰 <span>• 5h</span>
                </p>
              </div>
              <div className="blue-circle"></div>
            </div>
          </div>
          <div className="convo-image">
            <img src={girl7} alt="Profile" />
            <div className="message-container">
              <div className="convo-message">
                <p className="name">Ganda 😍</p>
                <p className="message">
                  Hi pogi 🥰 <span>• 6h</span>
                </p>
              </div>
              <div className="blue-circle"></div>
            </div>
          </div>
        </div>
        <div className="footer">
          <img src={download} alt="Download" />
          <h3>Try Messenger for Windows</h3>
        </div>
      </div>
    </div>
  );
};

export default Chats;
