﻿import L, { LatLng } from 'leaflet';
import Image from 'next/image';
import objectHash from 'object-hash';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import type {
  IIASAFieldSurveyDtosCoordinate,
  IIASAFieldSurveyDtosImageDto,
} from '@/api/autoGenerated/schemas';

const myIcon = new L.Icon({
  iconUrl: '/icon.svg',
  iconRetinaUrl: '/icon.svg',
  popupAnchor: [-0, -0],
  iconSize: [45, 45],
});

interface MapElementProps {
  images?: IIASAFieldSurveyDtosImageDto[] | null;

  location?: IIASAFieldSurveyDtosCoordinate[] | null;
}

const MapElement = (props: MapElementProps) => {
  function getLocation(
    location: IIASAFieldSurveyDtosCoordinate[] | null | undefined
  ) {
    if (location === null || location === undefined) {
      return new LatLng(51.505, -0.09);
    }
    return new LatLng(location[0]?.yLat as number, location[0]?.xLng as number);
  }

  function getMarker(img: IIASAFieldSurveyDtosImageDto) {
    const decodedString = decodeURIComponent(img.data as string);
    const metaData = JSON.parse(decodedString);
    const markerPosition = new LatLng(metaData.lat, metaData.lng);

    return (
      <Marker icon={myIcon} key={`marker${img.id}`} position={markerPosition}>
        <Popup key={`popup${img.id}`} className="h-auto w-auto">
          <div>
            <h2 className="w-80 text-center">Survey Image</h2>
            <Image
              width={720}
              height={320}
              loading="lazy"
              className="h-80 w-96"
              key={`image${img.id}`}
              src={img.storageUrl as string}
              alt={`Survey Image:${img.id}`}
              title={decodedString}
            />
          </div>
        </Popup>
      </Marker>
    );
  }

  const waterSourceLoc = getLocation(props.location);
  return (
    <MapContainer
      className="map"
      center={waterSourceLoc}
      zoom={16}
      style={{
        height: '70vh',
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://clarity.maptiles.arcgis.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
      />
      <Marker
        key={`marker1${objectHash.keys('marker1')}`}
        position={waterSourceLoc}
      >
        <Popup
          key={`popKeys1${objectHash.keys('popup1')}`}
          className="h-auto w-auto"
        >
          <div>
            <h2>Water Source</h2>
          </div>
        </Popup>
      </Marker>
      {props.images && props.images.map((img) => getMarker(img))}
    </MapContainer>
  );
};
export default MapElement;
