import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ConfigForm from "../components/ConfigForm";

import ScreenHome from "../screen/ScreenHome";
import ScreenLogin from "../screen/ScreenLogin";
import ScreenRegistration from "../screen/ScreenRegistration";

export default function Routers() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <ScreenLogin />
        </Route>
        <Route exact path={"/register"}>
          <ScreenRegistration />
        </Route>
        <Route exact path={"/home"}>
          <ScreenHome />
        </Route>
        <Route exact path={"/config"}>
          <ConfigForm/>
        </Route>
        <Route>
          <div>Página não encontrada</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
