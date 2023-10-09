"use client";
import { Input, Button } from "@nextui-org/react";
import { SearchIcon } from "./Icons/SearchIcon";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const InputBox = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  return (
    <>
      <Input
        classNames={{
          base: "max-w-full sm:max-w-[14rem] h-10",
          mainWrapper: "h-full",
          input: "text-small",
          inputWrapper: "h-full font-normal text-white",
        }}
        placeholder="Type to search..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        size="sm"
        startContent={<SearchIcon size={18} />}
        onKeyDown={(e) => {
          if (e.code === "Enter") {
            const newpath = searchParams.has("unit")
              ? `/dashboard?city=${search}&unit=${searchParams.get("unit")}`
              : `/dashboard?city=${search}`;
            router.push(newpath);
          }
        }}
      />
      <Button
        radius="full"
        className="md:hidden text-white shadow-lg"
        style={{
          backgroundColor: "#fce055",
          backgroundImage:
            "linear-gradient(319deg, #fce055 0%, #256eff 37%, #46237a 100%)",
        }}
        onClick={() => {
          const newpath = searchParams.has("unit")
            ? `/?city=${search}&unit=${searchParams.get("unit")}`
            : `/?city=${search}`;
          router.push(newpath);
        }}
      >
        Search
      </Button>
    </>
  );
};

export default InputBox;
