import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useQuery } from 'react-query';
import L from 'leaflet';
import ManIcon from './pin-point.png';

const MapWithMarkers: React.FC = () => {
  const { data, isLoading, isError } = useQuery('countryData', async () => {
    const response = await fetch('https://disease.sh/v3/covid-19/countries');
    if (!response.ok) {
      throw new Error('Failed to fetch country data');
    }
    return response.json();
  });

  const customIcon = L.icon({
    iconUrl: ManIcon,
    iconSize: [32, 32], // size of the icon
    iconAnchor: [16, 32], // point of the icon which will correspond to marker's location
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching data</p>;

  return (
    <div className="bg-custom-color w-full sm:w-5/6 mt-8 mb-4 p-4 ml-auto sm:pr-20 sm:pl-20 pb:10 sm:pb-20">
      <h2 className="text-xl sm:text-3xl font-semibold mb-2 sm:mb-8 text-center text-custom-blue"> Mapping Active, Deceased and Recovered Cases Around the World</h2>
      <div className=" bg-custom-color">
        <MapContainer center={[0, 0]} zoom={2} scrollWheelZoom={false} touchZoom={true}> {/* Enable touchZoom */}
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {data &&
            data.map((country: any) => (
              <Marker key={country.countryInfo._id} position={[country.countryInfo.lat, country.countryInfo.long]} icon={customIcon}>
                <Popup>
                  <div>
                    <h3 className="text-lg font-semibold">{country.country}</h3>
                    <p className="text-blue-600">Total Active Cases: {country.active}</p>
                    <p className="text-green-600">Total Recovered: {country.recovered}</p>
                    <p className="text-red-600">Total Deaths: {country.deaths}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapWithMarkers;
