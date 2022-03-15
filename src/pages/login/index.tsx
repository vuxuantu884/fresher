import { useLogin } from 'handlers/auth/hooks';

function LoginPage() {
  const { onChangePhone, onChangePassword, onLogin } = useLogin();

  return (
    <div className='mx-auto mt-4 w-[500px]'>
      <h1 className='mb-4 text-center'>Login page</h1>
      <div className="mb-4">
        <input className='w-full border py-3 px-5' type="text" placeholder="phone" onChange={onChangePhone} />
      </div>
      <div className="mb-4">
        <input className='w-full border  py-3  px-5' type="password" placeholder="password" onChange={onChangePassword} />
      </div>
      <button className='border block mx-auto py-3 px-12' type="button" onClick={onLogin}>Login</button>
    </div>
  );
}

export default LoginPage;
