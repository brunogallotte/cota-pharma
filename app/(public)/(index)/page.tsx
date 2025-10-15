import { auth } from "@/auth";

export default async function Home() {
  const data = await auth();

  return (
    <div>
      <h1>asdasdasdas</h1>
      <h1>asdasdasdas</h1>
      <h1>asdasdasdas</h1>
      <h1>{data?.user?.email}</h1>
    </div>
  );
}
