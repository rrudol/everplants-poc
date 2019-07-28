import React from "react";
import styled from "styled-components";
import Loading from "../Loading/Loading";

import { useDownloadURL } from "react-firebase-hooks/storage";
import firebase from "../Firebase";
import { FormattedMessage } from "react-intl";
import FormattedDuration from "react-intl-formatted-duration";

const Card = styled.div`
  box-shadow: 0 0 20px #3333;
  border-radius: 10px;
  background: #fff;
  width: 100%;
  display: grid;
  grid-template-columns: 200px 1fr;
  /* grid-template-rows: 200px 1fr; */
  min-height: 200px;
  overflow: hidden;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 20px;
`;

const CardWaterButton = styled.button`
  background: #69a0ad;
  border-radius: 10px;
  padding: 5px 15px;
  font-weight: 700;
  margin: 5px;
  color: #fff;
  border: 0;
`;

const CardPhotoButton = styled.button`
  background: #61bf7f;
  border-radius: 10px;
  padding: 5px 15px;
  font-weight: 700;
  margin: 5px;
  color: #fff;
  border: 0;
`;

const CardPhotoUploadButton = styled.label`
  background: #61bf7f;
  border-radius: 10px;
  padding: 5px 15px;
  font-weight: 700;
  margin: 5px;
  color: #fff;
  border: 0;
  font-size: 12px;
  display: inline-block;

  input {
    display: none;
  }
`;

const CardDeleteButton = styled.button`
  background: #bf6161;
  border-radius: 10px;
  padding: 5px 15px;
  font-weight: 700;
  margin: 5px;
  color: #fff;
  border: 0;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 16px;
`;

const CardSubtitle = styled.p`
  margin: 3px 0 12px;
  font-size: 14px;
`;

const CardParagraph = styled.p`
  font-size: 12px;
  margin: 3px 0;
`;

function PlantCard({ plant }) {
  const { name, species } = plant;
  const [imageSrc, imageLoading] = useDownloadURL(
    firebase.storage().ref(plant.image || `${plant.path}/${plant.id}`)
  );
  return (
    <Card>
      {imageLoading && <Loading small={true} />}
      {imageSrc ? <CardImage src={imageSrc} /> : <div />}
      <CardContent>
        <CardTitle
          onClick={() => (plant.name = window.prompt(`Rename ${name}`, name))}
        >
          {name}
        </CardTitle>
        <CardSubtitle
          onClick={() =>
            (plant.species = window.prompt(`Changing species `, species))
          }
        >
          {species}
        </CardSubtitle>
        <CardParagraph>
          <FormattedMessage
            id="app.plants.needs-water-every"
            defaultMessage={`Needs water every {time}`}
            values={{
              time: (
                <strong>
                  <FormattedDuration
                    seconds={plant.days * 86400}
                    format="{days}"
                  />
                </strong>
              )
            }}
          />
        </CardParagraph>
        <CardParagraph>
          {plant.draining ? (
            <strong>
              <FormattedMessage
                id="app.plants.needs-water"
                defaultMessage={`Needs water now!`}
              />
            </strong>
          ) : (
            <FormattedMessage
              id="app.plants.next-watering"
              defaultMessage={`Next watering in {time}`}
              values={{
                time: (
                  <strong>
                    <FormattedDuration
                      seconds={plant.nextWatering * 86400}
                      format="{days}"
                    />
                  </strong>
                )
              }}
            />
          )}
        </CardParagraph>
        <div>
          {plant.draining && (
            <CardWaterButton onClick={() => plant.water()}>
              water
            </CardWaterButton>
          )}
          {imageSrc ? (
            <CardPhotoButton onClick={() => plant.removePhoto()}>
              remove photo
            </CardPhotoButton>
          ) : (
            <CardPhotoUploadButton tabIndex={0}>
              <input
                type="file"
                accept="image/jpeg"
                onChange={e => plant.uploadPhoto(e)}
              />
              <>upload photo</>
            </CardPhotoUploadButton>
          )}
          <CardDeleteButton onClick={() => plant.delete()}>
            delete
          </CardDeleteButton>
        </div>
      </CardContent>
    </Card>
  );
}

export default PlantCard;
