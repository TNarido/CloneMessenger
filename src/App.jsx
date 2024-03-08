import "./App.css";
import Header from "./components/Header/Header";
import Chats from "./components/Chats/Chats";
import Conversation from "./components/Conversation/Conversation";
import ConvoSettings from "./components/ConvoSettings/ConvoSettings";

function App() {
  return (
    <>
      <div className="main-container">
        <div className="parent-content">
          <div className="header">
            <Header />
          </div>
          <div className="main-body">
            <div className="chats">
              <Chats />
            </div>
            <div className="conversation">
              <Conversation />
            </div>
            <div className="convo-settings">
              <ConvoSettings />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
