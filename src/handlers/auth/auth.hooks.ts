import { PATH_HOME } from "constant";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { setUserAction } from "store/reducers/user";
import { LoginInput } from "types/auth.types";
import { apiLogin } from "./auth.services";

export function useLogin() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onChangePhone = (e: any) => {
    setPhone(e.target.value);
  };

  const onChangePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const onLogin = () => {
    // const body: LoginInput = { phone, password };
    // const res = await apiLogin(body);
    const action = setUserAction();
    dispatch(action);
    // router.back();
    router.push(PATH_HOME);
  };

  return { onChangePhone, onChangePassword, onLogin };
}
