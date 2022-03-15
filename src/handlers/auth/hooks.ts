import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from 'store/reducers/user';
import { LoginInput } from 'types/auth.types';
import { apiLogin } from './services';

export function useLogin() {
  const [phone, setPhone] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useDispatch();
  const router = useRouter()

  const onChangePhone = (e: any) => {
    setPhone(e.target.value);
  }

  const onChangePassword = (e: any) => {
    setPassword(e.target.value);
  }

  const onLogin = async () => {
    const body: LoginInput = { phone, password }
    const res = await apiLogin(body);

    const action = setUser(res);
    dispatch(action);
    router.back();
  }

  return { onChangePhone, onChangePassword, onLogin };
}
