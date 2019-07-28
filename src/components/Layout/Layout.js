import React from "react";

import "../../styles.css";
import Logo from "../Logo/Logo";
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";
import Header from "../Header/Header";

function Layout({ children }) {
  return (
    <>
      <Header>
        <Logo title="EverPlants" shortTitle="EP" />
        <Menu />
      </Header>

      {children}

      <Footer>
        don't let &nbsp;&nbsp;&nbsp;&nbsp;
        <Logo title="your plants" shortTitle="plants" />
        &nbsp;&nbsp;&nbsp;die again
      </Footer>
    </>
  );
}

export default Layout;
