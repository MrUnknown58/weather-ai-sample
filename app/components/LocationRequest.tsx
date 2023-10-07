"use client";
import { useEffect, useState } from "react";
import setCookies from "./serverActions/setCookies";
const LocationRequest = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

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
      setCookies("lat", location.latitude);
      setCookies("lon", location.longitude);
    }
  }, [location]);
  return <></>;
};

export default LocationRequest;
