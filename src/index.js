import React from "react";
import ReactDOM from "react-dom";
import { addLocaleData, IntlProvider } from "react-intl";
import plLocaleData from "react-intl/locale-data/pl";

// import pl from "./translations/pl.json";

import Layout from "./components/Layout/Layout";
import Router from "./Router";

addLocaleData(plLocaleData);

ReactDOM.render(
  // <IntlProvider locale="pl" messages={pl}>
  <IntlProvider locale="en">
    <Layout>
      <Router />
    </Layout>
  </IntlProvider>,
  document.getElementById("root")
);
