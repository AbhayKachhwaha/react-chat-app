import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import "./App.css";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="1305b2c7-1b2e-45bb-b9df-2267f7075cdb"
      userName="JSMaster"
      userSecret="123123"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
