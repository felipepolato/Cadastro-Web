import React from "react";
import FormRegisters from "../../components/FormRegistrs";

import { useHistory } from "react-router-dom";

///style////////////////////////////////
// import {  } from "./style";

export default function ScreenRegistration() {
  const history = useHistory()

  const GoToLogin = () => {
    history.push("/login");
  };

  

  return (
    <div>
      ScreenRegistration
      <FormRegisters />

      <button onClick={GoToLogin}>ScreenLogin</button>
    </div>
  );
}
