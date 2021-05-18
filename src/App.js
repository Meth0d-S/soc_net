import styles from './App.module.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter as Router, Route} from "react-router-dom";
import MessengerContainer from "./components/Messenger/MessengerContainer";
import UsersContainer from "./components/Users/UsersContainer";

function App(props) {
  return (
    <Router>
      <div className={styles.wrapper}>
        <Header/>
        <main className={styles.main}>
          <Navbar/>
          <div className={styles.content}>
            <Route path='/profile' render={() => <Profile/>}/>
            <Route path='/messenger' render={() => <MessengerContainer />}/>
            <Route path='/news' render={() => <News/>}/>
            <Route path='/music' render={() => <Music/>}/>
            <Route path='/settings' render={() => <Settings/>}/>
            <Route path='/users' render={() => <UsersContainer/>}/>
          </div>
        </main>
        <footer className="footer">

        </footer>
      </div>
    </Router>
  );
}

export default App;