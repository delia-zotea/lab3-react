import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <nav className={styles.navbar}>
      <Link to="/">Acasă</Link>
      <Link to="/about">Despre</Link>
    </nav>
  );
}

export default Header;
