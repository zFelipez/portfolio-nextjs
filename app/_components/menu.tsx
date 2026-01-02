import { Navigation } from "./navigation";
import { Repo } from "../_components/navigation";
import { headers } from "next/headers";

export async function Menu() {
  const host = (await headers()).get("host");
  // const data: Repo[] = await fetch(`http://${host}/api/github`,{ cache:'no-store'}).then(response => response.json())

  return <Navigation data={[]} />;
}
