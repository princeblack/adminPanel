import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import 'leaflet/dist/leaflet.css';
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

// Sample data for active users by country
const activeUsersData = [
  { country: 'USA', activeUsers: 500 },
  { country: 'Germany', activeUsers: 300 },
  { country: 'UK', activeUsers: 250 },
  { country: 'Canada', activeUsers: 150 },
  { country: 'India', activeUsers: 100 },
];

// Coordinates for countries (simplified for this example)
const countryCoordinates = {
  USA: { lat: 37.0902, lon: -95.7129 },
  Germany: { lat: 51.1657, lon: 10.4515 },
  UK: { lat: 51.5074, lon: -0.1278 },
  Canada: { lat: 56.1304, lon: -106.3468 },
  India: { lat: 20.5937, lon: 78.9629 },
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6666'];

const ActiveUsersCard = () => {
  return (
    <Card style={{ }}>
      <CardBody>
        <h5>Active Users by Country</h5>

        {/* Map Section */}
        <MapContainer center={[20, 0]} zoom={2} style={{ height: '300px', marginBottom: '20px' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {activeUsersData.map((userData, index) => {
            const { country, activeUsers } = userData;
            const { lat, lon } = countryCoordinates[country];

            return (
              <Marker key={index} position={[lat, lon]} icon={new L.Icon({ iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png' })}>
                <Popup>
                  <div>
                    <strong>{country}</strong>
                    <p>Active Users: {activeUsers}</p>
                  </div>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>

        {/* Pie Chart Section */}
        <p  style={{ marginBottom: '10px' }}>
          Active Users Distribution
        </p>
        <ResponsiveContainer width="100%" height={150}>
          <PieChart>
            <Pie
              data={activeUsersData}
              dataKey="activeUsers"
              nameKey="country"
              outerRadius="80%"
              label
            >
              {activeUsersData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardBody>
    </Card>
  );
};

export default ActiveUsersCard;
