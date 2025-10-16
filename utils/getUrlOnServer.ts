
import { headers } from "next/headers";

const getUrlOnServer = async () => (await headers()).get("x-url") || "";

export default getUrlOnServer;
