"use client";
import { Switch, Tooltip, VisuallyHidden, useSwitch } from "@nextui-org/react";
import { useEffect } from "react";
import setCookies from "./serverActions/setCookies";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import { MoonIcon } from "./MoonIcon";
// import { SunIcon } from "./SunIcon";

const ThemeSwitch = (props: any) => {
  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch(props);
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  useEffect(() => {
    const newPath = searchParams.has("city")
      ? `/dashboard?city=${searchParams.get("city")}&unit=${
          !isSelected ? "metric" : "imperial"
        }`
      : `/dashboard?unit=${!isSelected ? "metric" : "imperial"}`;
    router.push(newPath);
  }, [isSelected, router, searchParams]);

  return (
    <div className="flex flex-col gap-2">
      <Component {...getBaseProps()}>
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <Tooltip
          placement="bottom"
          content="Click to Switch Units"
          color="secondary"
        >
          <div
            {...getWrapperProps()}
            className={slots.wrapper({
              class: [
                "md:w-10 w-8 h-10 text-base",
                "flex items-center justify-center",
                "rounded-lg bg-default-100 hover:bg-default-200",
              ],
            })}
          >
            {!isSelected ? "C" : "F"}
          </div>
        </Tooltip>
      </Component>
    </div>
  );
};
const SwitchUnit = () => {
  return <ThemeSwitch />;
};

export default SwitchUnit;
