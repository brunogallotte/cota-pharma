import { headers, type UnsafeUnwrappedHeaders } from "next/headers";

const getDeviceOnServer = async () => (await headers()).get("x-device") || "unknown";
export default getDeviceOnServer;