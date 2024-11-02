import React from "react";
import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";

interface currentInterface {
    lat: number;
    lng: number;
}
  
const MapLocation = ({
  current,
  classname,
}: {
  current: currentInterface;
  classname: string;
}) => {
  return (
    <div>
      <APIProvider apiKey={process.env.GOOGLE_MAPS_API_KEY as string}>
        <div className={`h-[50vh] ${classname}`}>
          <Map
            defaultCenter={current}
            defaultZoom={10}
            mapId={process.env.MAP_ID}
          >
            <AdvancedMarker position={current} />
          </Map>
        </div>
      </APIProvider>
    </div>
  );
};

export default MapLocation;
