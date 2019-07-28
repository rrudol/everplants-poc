import React from "react";
import Section from "../Section/Section";
import { CardContainer } from "../Card/Card";

function Error() {
  return (
    <Section>
      <CardContainer style={{ textAlign: "center" }}>
        Something went wrong :(
      </CardContainer>
    </Section>
  );
}

export default Error;
