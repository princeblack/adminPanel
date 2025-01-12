import React from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
// import L from 'leaflet';
import {Card,  CardBody, CardHeader} from "@nextui-org/react";
import 'leaflet/dist/leaflet.css';
import countryGeoData from "@/utils/geo.json";

const activeUsersData = {
  USA: 500,
  Canada: 300,
  UK: 250,
  India: 150,
  Germany: 100,
  France: 200,
  Zambia: 200,
  "Burkina Faso": 300,
  "United Kingdom": 20,
  "United States of America": 500,
  "South Africa": 230,
  Brazil: 200,
};


const ActiveUsersMapCard = () => {
  const getColor = (countryCode) => {
    return activeUsersData[countryCode] ? '#0886e0' : '#cecccc'; 
  };

  const style = (feature) => {
    const countryCode = feature.properties.name; 
    return {
      fillColor: getColor(countryCode),
      weight: 1,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7,
    };
  };

  return (
    <Card className='p-0'>
        <CardHeader className="pb-0 pt-2  flex-col items-start">
        <p className="text-tiny uppercase font-bold">Active Users by Country</p>
      </CardHeader>
      <CardBody>
        <MapContainer  center={[20, 0]} zoom={2} style={{ height: '300px' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <GeoJSON data={countryGeoData} style={style} />
        </MapContainer>
      </CardBody>
    </Card>
  );
};

export default ActiveUsersMapCard;
