import React, { useState } from "react";
import ScreenLogin from "../ScreenLogin";
import ScreenRegistration from "../ScreenRegistration";

///style////////////////////////////////
// import {  } from "./style";

export default function ScreenHome() {
  const [name, setName] = useState("Felipe");
  
  return (
    <div>
      <p>Olá {name}!</p>
      <div>
        <button>Config</button>
        <button >Sair</button>
      </div>
    </div>
  );
}
