import React, { useState } from "react";
import { navigate } from "@reach/router";
import { ClipLoader } from "react-spinners";

import Section from "../components/Section/Section";
import Form from "../components/Form/Form";
import { CardContainer } from "../components/Card/Card";
import firebase from "../components/Firebase";

async function postData(body, ownerId) {
  firebase
    .firestore()
    .collection("users/")
    .doc(ownerId)
    .collection("/plants")
    .doc()
    .set({ ...body, ownerId });
}

export default ({ user }) => {
  const [loading, setLoading] = useState(false);

  return (
    <Section>
      {loading ? (
        <CardContainer style={{ textAlign: "center" }}>
          <ClipLoader
            sizeUnit={"px"}
            size={150}
            color={"#123abc"}
            loading={loading}
          />
        </CardContainer>
      ) : (
        <Form
          onSubmit={async data => {
            setLoading(true);
            await postData(data, user.uid);
            setLoading(false);
            navigate("/plants");
          }}
        />
      )}
    </Section>
  );
};
