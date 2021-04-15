import styles from './App.module.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Messenger from "./components/Messenger/Messenger";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className={styles.wrapper}>
        <Header/>
        <main className={styles.main}>
          <Navbar/>
          <div className={styles.content}>
            <Route path='/profile' component={Profile}/>
            <Route path='/messenger' component={Messenger}/>
            <Route path='/news' component={News}/>
            <Route path='/music' component={Music}/>
            <Route path='/settings' component={Settings}/>
          </div>

        </main>
        <footer className="footer">

        </footer>
      </div>
    </Router>
  );
}

export default App;