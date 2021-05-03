import styles from './App.module.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Messenger from "./components/Messenger/Messenger";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter as Router, Route} from "react-router-dom";

function App(props) {
  return (
    <Router>
      <div className={styles.wrapper}>
        <Header/>
        <main className={styles.main}>
          <Navbar state={props.state.sidebar}/>
          <div className={styles.content}>
            <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>}/>
            <Route path='/messenger' render={() => <Messenger messengerPage={props.state.messengerPage} dispatch={props.dispatch}/>}/>
            <Route path='/news' render={() => <News/>}/>
            <Route path='/music' render={() => <Music/>}/>
            <Route path='/settings' render={() => <Settings/>}/>
          </div>
        </main>
        <footer className="footer">

        </footer>
      </div>
    </Router>
  );
}

export default App;