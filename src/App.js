import styles from './App.module.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className={styles.wrapper}>
      <Header/>
      <main className={styles.main}>
        <Navbar/>
        <Profile/>
      </main>
      <footer className="footer">

      </footer>
    </div>
  );
}

export default App;
