import {BrowserRouter as Router, Route} from "react-router-dom";
import styles from './App.module.css';
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Login from "./components/Login/Login";
import MessengerContainer from "./components/Messenger/MessengerContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

function App(props) {
  return (
    <Router>
      <div className={styles.wrapper}>
        <HeaderContainer/>
        <main className={styles.main}>
          <Navbar/>
          <div className={styles.content}>
            <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
            <Route path='/messenger' render={() => <MessengerContainer />}/>
            <Route path='/news' render={() => <News/>}/>
            <Route path='/music' render={() => <Music/>}/>
            <Route path='/settings' render={() => <Settings/>}/>
            <Route path='/users' render={() => <UsersContainer/>}/>
            <Route path='/login' render={() => <Login/>}/>
          </div>
        </main>
        <footer className="footer">

        </footer>
      </div>
    </Router>
  );
}

export default App;