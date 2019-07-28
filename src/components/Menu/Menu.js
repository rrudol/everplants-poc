import React from "react";

import styles from "./Menu.module.scss";
import { Link } from "@reach/router";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "../Firebase/Firebase";
import { FormattedMessage } from "react-intl";

function Menu({ onClick }) {
  const [user, loading] = useAuthState(firebase.auth());

  return (
    <div className={styles.menuWrapper}>
      <div className={styles.menu}>
        {user ? (
          <>
            <Link to="plants">
              <FormattedMessage
                id="app.menu.my-plants"
                defaultMessage={`my plants`}
              />
            </Link>
            <Link to="add">
              <FormattedMessage
                id="app.menu.add-new-plant"
                defaultMessage={`add new plant`}
              />
            </Link>
            <a
              href="/logout"
              onClick={e => {
                e.preventDefault();
                firebase.auth().signOut();
              }}
            >
              <FormattedMessage
                id="app.menu.logout"
                defaultMessage={`logout`}
              />
            </a>
          </>
        ) : (
          <>
            {!loading && (
              <Link to="/signin">
                <FormattedMessage
                  id="app.menu.sign-in"
                  defaultMessage={`sign in`}
                />
              </Link>
            )}
          </>
        )}
      </div>
      <Link to="add" className={styles.menuMobile}>
        <div />
        <div />
        <div />
      </Link>
    </div>
  );
}

export default Menu;
