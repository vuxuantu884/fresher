import { useLogin } from 'handlers/auth/auth.hooks';
import styles from './styles/login.module.scss';

function LoginPage() {
  const { onChangePhone, onChangePassword, onLogin } = useLogin();

  return (
    <div className={styles.loginContainer}>
      <h1 className={styles.title}>Login page</h1>
      <div className="mb-4">
        <input className={styles.input} type="text" placeholder="phone" onChange={onChangePhone} />
      </div>
      <div className="mb-4">
        <input className={styles.input} type="password" placeholder="password" onChange={onChangePassword} />
      </div>
      <button className={styles.button} type="button" onClick={onLogin}>Login</button>
    </div>
  );
}

export default LoginPage;
