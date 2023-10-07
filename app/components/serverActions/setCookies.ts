"use server";
import { cookies } from "next/headers";
interface setCookiesProps {
  name: string;
  value: number;
}
const setCookies = async ({ name, value }: setCookiesProps) => {
  cookies().set(name, value.toString());
};
export default setCookies;
