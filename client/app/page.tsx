import { trcp } from "./lib/trpc";

export default async function Home() {
  //@ts-ignore
  const response = await trcp.health.query('Great message');
  return (
    <h2>Hello</h2>
  );
}
