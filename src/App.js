import React from 'react';
import SideWindow from './features/sideWindow/SideWindow';
import ChatWindow from './features/chatWindow/ChatWindow';
import './global.css';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <header className={styles.toplayer} >SmartChat</header>
      <div className={styles.layout}>
        <SideWindow />
        <ChatWindow />
      </div>
    </div>
  );
}

export default App;
