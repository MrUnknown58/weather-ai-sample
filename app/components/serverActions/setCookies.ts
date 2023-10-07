"use server";
import { cookies } from "next/headers";

const setCookies = async (name, value) => {
  cookies().set(name, value);
};
export default setCookies;
