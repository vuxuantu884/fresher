import styles from './styles/header.module.scss';

function HeaderLayout() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.header}>Header</div>
    </header>
  );
}

export default HeaderLayout;
