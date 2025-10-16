import { headers } from "next/headers";

export default async function getHostViaHeaders() {
  return (await headers()).get("host") || "cotapharma.com.br";
}
