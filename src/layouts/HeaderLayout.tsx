import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { getUserStore, removeUserAction } from 'store/reducers/user';
import styles from './styles/header.module.scss';

function HeaderLayout() {
  const user = useSelector(getUserStore);
  const dispatch = useDispatch();
  const router = useRouter();

  const onLogout = () => {
    const action = removeUserAction();
    dispatch(action);
    router.push('/');
  }

  return (
    <header className={styles.headerContainer}>
      <div className={styles.header}>
        <Link href="/">
          <a className="mr-4">Home</a>
        </Link>

        {!user && (
          <Link href="/login">
            <a>Login</a>
          </Link>
        )}
        {user && (
          <button onClick={onLogout}>Logout</button>
        )}
      </div>
    </header>
  );
}

export default HeaderLayout;
