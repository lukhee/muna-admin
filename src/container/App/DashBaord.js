import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import DashBoard from "../../components/layout/DashBoardLayout";
import DashboardView from "../../components/views/dashboard";
import Proverbs from "../../components/views/proverbs";
import NotFound from "../../components/views/error/NotFoundView";

const Application = () => {
  const dashboardRoute = ['/admin', '/admin/dashboard']
  return(
    <DashBoard>
      <Switch>
        <Route exact path={dashboardRoute} component={DashboardView} />
        <Route path="/admin/proverbs" component={Proverbs} />
        <Route path="/*" component={NotFound} />
        {/* <Route path="*"> <Redirect to='/404'/> </Route> */}
      </Switch>
    </DashBoard>
  )
};
export default Application;
