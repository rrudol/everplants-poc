import React from "react";
import Section from "../components/Section/Section";
import { CardContainer } from "../components/Card/Card";
import Typist from "react-typist";

export default () => (
  <Section>
    <h1
      style={{
        textAlign: "center"
      }}
    >
      <Typist cursor={{ show: false }}>
        Don’t let them{" "}
        <span
          style={{
            color: "red"
          }}
        >
          die
        </span>{" "}
        again!
      </Typist>
    </h1>
    <CardContainer>
      <h2>Regular watering is important!</h2>

      <p>
      Nowadays when everyone has so much to do it’s difficult to take care of 
      oxygen producers in your home. Most people remember about them once a week, 
      but most of our green friends require feeding more often. Nobody likes to 
      miss lunch because hunger is not a pleasant feeling. Don’t let your plants 
      feel that pain.
      </p>

      <h2>Gamify everyday routine</h2>

      <p>
      Often it’s hard to stick to a regular schedule of doing something boring, 
      but let’s imagine that you are playing an economy game where you are the boss 
      of the company and your plants generate income. Serotonin level in your body 
      will increase every time when you take care of your gooses that are laying 
      the golden eggs.
      </p>
    </CardContainer>
  </Section>
);
