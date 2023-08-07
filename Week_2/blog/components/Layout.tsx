import styles from '../styles/Layout.module.css'
import Header from './Header'
import Nav from './Nav'
import Meta from './Meta'

const Layout: React.FC = ({ children }) => {
  return (
    <>
    <Meta />
    <Nav />
    
    <div className = {styles.container}>
    <Header />
      <main className={styles.main}>{children}</main>
    </div>
    </>
  );
};

export default Layout;