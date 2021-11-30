import styles from "../styles/Home.module.css";
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div className='content'>
      <Navbar />
      {children}
      <footer className={styles.footer}>
          <Footer/>
      </footer>
    </div>
  );
};

export default Layout;
