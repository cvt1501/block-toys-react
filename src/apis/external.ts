import fetch from "cross-fetch";

export default async function get(url: string) {
  const response = await fetch(url);
  return await response.json();
}
