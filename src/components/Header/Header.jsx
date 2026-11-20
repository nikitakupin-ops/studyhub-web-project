
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <a className={styles.logo} href="/">
        <span className={styles['logo-icon']}>S</span>

        <span className={styles['logo-name']}>
          Study<span>Hub</span>
        </span>
      </a>

      <nav className={styles.navigation}>
        <a className={styles['nav-link']} href="#tasks">
          My planner
        </a>

        <a className={styles['nav-link']} href="#deadlines">
          Deadlines
        </a>
      </nav>

      <div className={styles['workspace-label']}>
        <span className={styles['status-dot']}></span>
        My study space
      </div>
    </header>
  );
}

export default Header;
