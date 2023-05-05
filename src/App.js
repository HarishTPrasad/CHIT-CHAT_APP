
import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID = '941df7ad-36be-4d77-90d4-727b832ddb91';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <div>
    
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
    </div>
  );
};

// infinite scroll, logout, more customizations...

export default App;