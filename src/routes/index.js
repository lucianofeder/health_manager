import { Switch, Route } from "react-router-dom";

import HomeUser from "../pages/HomeUser";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import NewUser from "../pages/NewUser";
import AllUsers from "../pages/AllUsers";
import AllGroups from "../pages/AllGroups";
import Group from "../pages/Group";
import Page404 from "../pages/Page404";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>

      <Route path="/HomeUser">
        <HomeUser />
      </Route>

      <Route path="/Login">
        <Login />
      </Route>

      <Route path="/NewUser">
        <NewUser />
      </Route>

      <Route path="/AllUsers">
        <AllUsers />
      </Route>

      <Route path="/AllGroups">
        <AllGroups />
      </Route>

      <Route path="/Group">
        <Group />
      </Route>

      <Route>
        <Page404 />
      </Route>
    </Switch>
  );
};

export default Routes;
