import React, { useCallback, useState } from "react";
import SignupPresenter from "../presenter/SignupPresenter";

type InputValue = {
  value: string;
  error: boolean
};

export interface SignupState {
  name: InputValue;
  ssn1: InputValue;
  ssn2: InputValue;
  email: InputValue;
  password1: InputValue;
  password2: InputValue;
  phone1: InputValue;
  phone2: InputValue;
  phone3: InputValue;
  address1: InputValue;
  address2: InputValue;
}

const initialInputValue = { value: "", error: false };
const initialState: SignupState = {
  name: initialInputValue,
  ssn1: initialInputValue,
  ssn2: initialInputValue,
  email: initialInputValue,
  password1: initialInputValue,
  password2: initialInputValue,
  phone1: initialInputValue,
  phone2: initialInputValue,
  phone3: initialInputValue,
  address1: initialInputValue,
  address2: initialInputValue
};

export default function SignupContainer() {
  const [signupState, setSignupState] = useState(initialState);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(e => {
    let { name, value } = e.target;

    switch (name) {
      case "ssn1":
        if (value.length > 6) return;
        value = value.replace(/[^\d]/, "");
        break;
      case "ssn2":
        if (value.length > 7) return;
        value = value.replace(/[^\d]/, "");
        break;
      case "phone1":
        if (value.length > 3) return;
        value = value.replace(/[^\d]/, "");
        break;
      case "phone2":
        if (value.length > 4) return;
        value = value.replace(/[^\d]/, "");
        break;
      case "phone3":
        if (value.length > 4) return;
        value = value.replace(/[^\d]/, "");
        break;
    }

    setSignupState({
      ...signupState,
      [name]: {
        value: value,
        error: value.replaceAll(" ", "") === ""
      }
    })
  }, [signupState]);

  const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const checkSSN1 = /\d{2}([0]\d|[1][0-2])([0][1-9]|[1-2]\d|[3][0-1])/.test(signupState.ssn1.value);
    const checkSSN2 = /[1-4]\d{6}/.test(signupState.ssn2.value);
    const checkEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(signupState.email.value);
    const checkPhone1 = /(01)\d/.test(signupState.phone1.value);
    const checkPhone2 = /\d{4}/.test(signupState.phone2.value);
    const checkPhone3 = /\d{4}/.test(signupState.phone3.value);
    const checkPassword1 = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\!\?\@\#\$\%\^\&\*\?]).{8,20}$/.test(signupState.password1.value);
    const checkPassword2 = (signupState.password1.value === signupState.password2.value && signupState.password2.value.replaceAll(" ", "") !== "");

    const checkName = signupState.name.value.replaceAll(" ", "") !== "";
    const checkAddress1 = signupState.address1.value.replaceAll(" ", "") !== "";
    const checkAddress2 = signupState.address2.value.replaceAll(" ", "") !== "";

    setSignupState({
      ...signupState,
      name: { ...signupState.name, error: !checkName},
      ssn1: { ...signupState.ssn1, error: !checkSSN1 },
      ssn2: { ...signupState.ssn2, error: !checkSSN2 },
      email: { ...signupState.email, error: !checkEmail },
      phone1: { ...signupState.phone1, error: !checkPhone1 },
      phone2: { ...signupState.phone2, error: !checkPhone2 },
      phone3: { ...signupState.phone3, error: !checkPhone3 },
      password1: { ...signupState.password1, error: !checkPassword1 },
      password2: { ...signupState.password2, error: !checkPassword2 },
      address1: { ...signupState.address1, error: !checkAddress1 },
      address2: { ...signupState.address2, error: !checkAddress2 }
    });

    if (checkName && checkSSN1 && checkSSN2 && checkEmail && checkPhone1 && checkPhone2 && checkPhone3 && checkPassword1 && checkPassword2) {

    }

  }, [signupState]);

  return (
    <SignupPresenter
      signupState={signupState}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
}