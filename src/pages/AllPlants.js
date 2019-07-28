import React from "react";
import { Link, navigate } from "@reach/router";

import Section from "../components/Section/Section";
import { CardContainer } from "../components/Card/Card";

import PlantCard from "../components/PlantCard";
import Plant from "../models/Plant";

import useCollection from "../hooks/useCollection";
import Loading from "../components/Loading/Loading";
import Error from "../components/Error/Error";

export default ({ user }) => {
  if (!user) {
    navigate("signin");
    return "";
  }

  const [plants, loading, error] = useCollection(
    `users/${user.uid}/plants`,
    Plant
  );

  console.log(plants);

  if (error) return <Error />;
  if (loading) {
    return <Loading title={"Loading your plants"} loading={loading} />;
  }

  return (
    <>
      {plants.length === 0 && (
        <Section title="No plants found">
          <CardContainer style={{ textAlign: "center" }}>
            Looks like you don't have any plants yet. <Link to="/add">Add</Link>{" "}
            some and make your life more green.
          </CardContainer>
        </Section>
      )}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridGap: "16px",
          marginBottom: "16px"
        }}
      >
        {plants.map(plant => (
          <PlantCard key={plant.id} user={user} plant={plant} />
        ))}
      </div>
    </>
  );
};
