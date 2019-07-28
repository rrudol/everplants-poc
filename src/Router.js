import React from "react";
import { Router } from "@reach/router";

import About from "./pages/About";
import AllPlants from "./pages/AllPlants";
import AddPlant from "./pages/AddPlant";
import SignIn from "./pages/SignIn";
import useAuth from "./hooks/useAuth";
import Loading from "./components/Loading/Loading";
import Error from "./components/Error/Error";

export default () => {
  const [user, loading, error] = useAuth();

  if (error) return <Error />;
  if (loading) return <Loading title={"Authenticating"} loading={loading} />;

  return (
    <Router>
      <About path="/" />
      <AllPlants user={user} path="/plants" />
      <AddPlant user={user} path="add" />
      <SignIn path="/signin" />
    </Router>
  );
};
