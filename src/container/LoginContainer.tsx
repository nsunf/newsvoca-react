import React, { useCallback, useState } from "react";
import LoginPresenter from "../presenter/LoginPresenter";

export interface LoginState {
  email: string;
  password: string;
  error: boolean
}

const initialState: LoginState = {
  email: "",
  password: "",
  error: false
}

export default function LoginContainer() {
  const [loginState, setLoginState] = useState<LoginState>(initialState);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginState({
      ...loginState,
      [e.target.name]: e.target.value
    })
  }, [loginState]);

  const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let loginSucceed = true;
    if (loginState.email === "" || loginState.password === "") {
      loginSucceed = false;
    }
    setLoginState({ ...loginState, error: !loginSucceed });
  }, [loginState]);

  return (
    <LoginPresenter loginState={loginState} onChange={onChange} onSubmit={onSubmit} />
  );
}