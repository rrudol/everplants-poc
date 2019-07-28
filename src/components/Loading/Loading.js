import React from "react";
import Section from "../Section/Section";
import { CardContainer } from "../Card/Card";
import { ClipLoader } from "react-spinners";

function Loading({ title, loading, small }) {
  return (
    <Section title={title}>
      {!small ? (
        <CardContainer style={{ textAlign: "center" }}>
          <ClipLoader
            sizeUnit={"px"}
            size={150}
            color={"#123abc"}
            loading={loading}
          />
        </CardContainer>
      ) : (
        <ClipLoader
          sizeUnit={"px"}
          size={150}
          color={"#123abc"}
          loading={loading}
        />
      )}
    </Section>
  );
}

export default Loading;
