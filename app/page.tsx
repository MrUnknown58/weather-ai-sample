import { Button } from "@nextui-org/button";
import { CircularProgress } from "@nextui-org/progress";
import Image from "next/image";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/popover";
import LocationRequest from "./components/LocationRequest";
import { cookies } from "next/headers";
import { useCallback } from "react";
import WeatherInfo from "./components/WeatherInfo";
import WeatherDesc from "./components/WeatherDesc";
import { SearchIcon } from "./components/Icons/SearchIcon";
import InputBox from "./components/Input";
import { Spinner } from "@nextui-org/spinner";

interface getDataProps {
  lon?: string;
  lat?: string;
  city?: string;
  unit?: string;
}
async function getData({ lon, lat, city, unit = "metric" }: getDataProps) {
  if (!city && !lat && !lon) return null;
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?${
      city ? `q=${city}` : `lat=${lat}&lon=${lon}`
    }&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=${unit}`,
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) {
    const r = await res.json();
    return r.message;
  }

  return await res.json();
}

interface HomeProps {
  searchParams: {
    city: string;
    unit: string;
  };
}
export default async function Home({ searchParams }: HomeProps) {
  const city = searchParams.city;
  const cookieStore = cookies();
  const lon = cookieStore.get("lon");
  const lat = cookieStore.get("lat");
  const unit = searchParams.unit;
  const data = await getData({
    lon: lon?.value,
    lat: lat?.value,
    city: city,
    unit: unit,
  });
  if (!data) {
    return <Spinner size="lg" />;
  }
  if (typeof data === "string")
    return (
      <div className="flex justify-center items-center h-full text-4xl">
        {data.toUpperCase()}
      </div>
    );
  return (
    <>
      <div className="md:pl-44 items-center md:justify-start flex md:flex-row flex-col mt-10 text-2xl h-full">
        <div className="h-full md:w-[50%]">
          <WeatherInfo data={data} unit={unit} />
        </div>
        <div className="flex items-center">
          <WeatherDesc data={data} unit={unit} />
        </div>
      </div>
      <LocationRequest />
    </>
  );
}
