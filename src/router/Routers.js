import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ScreenHome from "../screen/ScreenHome";
import ScreenLogin from "../screen/ScreenLogin";
import ScreenRegistration from "../screen/ScreenRegistration";

export default function Routers() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <ScreenHome/>
        </Route>
        <Route exact path={"/login"}>
          <ScreenLogin/>
        </Route>
        <Route exact path={"/registration"}>
          <ScreenRegistration/>
        </Route>
        <Route>
          <div>Página não encontrada</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
