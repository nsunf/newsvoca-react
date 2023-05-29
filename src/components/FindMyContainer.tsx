import React, { useCallback, useState } from "react";
import FindMyPresenter from "../presenter/FindMyPresenter";

export interface FindMyState {
  name: string;
  phone1: string;
  phone2: string;
  phone3: string;
  email: string;
}

const initialState: FindMyState = {
  name: "",
  phone1: "",
  phone2: "",
  phone3: "",
  email: ""
};

export default function FindMyContainer() {
  const [findMyState, setFindMyState] = useState<FindMyState>(initialState);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(e => {
    let { name, value } = e.target;

    switch (name) {
      case "phone1" :
        if (value.length > 3) return;
        value = value.replaceAll(/[^\d]/g, "");
        break;
      case "phone2" :
        if (value.length > 4) return;
        value = value.replaceAll(/[^\d]/g, "");
        break;
      case "phone3" :
        if (value.length > 4) return;
        value = value.replaceAll(/[^\d]/g, "");
        break;
    }

    setFindMyState({
      ...findMyState,
      [name]: value
    })
  }, [findMyState]);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = useCallback(e => {
    e.preventDefault();
    
  }, []);
  
  return (
    <FindMyPresenter
      findMyState={findMyState}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
}