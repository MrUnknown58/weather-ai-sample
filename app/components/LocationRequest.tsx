"use client";
import { useEffect, useState } from "react";
import setCookies from "./serverActions/setCookies";
interface locationProps {
  latitude: number;
  longitude: number;
}
const LocationRequest = () => {
  const [location, setLocation] = useState<locationProps>({
    latitude: 0,
    longitude: 0,
  });
  const [error, setError] = useState("null");

  useEffect(() => {
    // Check if geolocation is available in the browser
    if ("geolocation" in navigator) {
      // Request permission for location
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Handle successful location retrieval
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setLocation({ latitude, longitude });
        },
        (err) => {
          // Handle location request error
          setError(err.message);
        }
      );
    } else {
      setError("Geolocation is not supported in this browser.");
    }
  }, []);

  useEffect(() => {
    if (location?.latitude && location?.longitude) {
      setCookies({ name: "lat", value: location.latitude });
      setCookies({ name: "lon", value: location.longitude });
    }
  }, [location]);
  return <></>;
};

export default LocationRequest;
