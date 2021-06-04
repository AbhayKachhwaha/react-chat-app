import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";
import "./App.css";

const App = () => {
  
  if(!localStorage.getItem('username')){
    return <LoginForm/>
  }
  
  return (
    <ChatEngine
      height="100vh"
      projectID="1305b2c7-1b2e-45bb-b9df-2267f7075cdb"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
