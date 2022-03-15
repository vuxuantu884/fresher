import FooterLayout from './FooterLayout';
import HeaderLayout from './HeaderLayout';
import styles from './styles/main.module.scss';

interface Props {
  children: React.ReactNode
}

function MainLayout({ children }: Props) {
  return (
    <div>
      <HeaderLayout />
      <main className={styles.main}>{children}</main>
      <FooterLayout />
    </div>
  );
}

export default MainLayout;
