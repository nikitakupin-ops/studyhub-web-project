import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>StudyHub</h1>

      <nav className={styles.navigation}>
        <a href="#">Home</a>
        <a href="#">Tasks</a>
        <a href="#">About</a>
      </nav>
    </header>
  );
}

export default Header;