import { useState } from 'react'
import './scss/App.scss';
import Home from "./Home.jsx";
import Footer from "./Footer.jsx";
import Sidebar from "./Sidebar.jsx";
import Profile from "./Profile.jsx";
import Inbox from "./Inbox.jsx";


import { observer } from 'mobx-react-lite';
import tabStore from "./tabStore.js";

function App() {
  return (
    <div className='App'>
      {tabStore.tab === 'Home' && <Home />}
      {tabStore.tab === 'Profile' && <Profile />}
      {tabStore.tab === 'Inbox' && <Inbox />}
      <Sidebar />
      <Footer />
    </div>
  )
}

export default observer(App)

