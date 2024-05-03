export default function getImage(url: string): string {
  const newURL = new URL(`/assets/${url}`, import.meta.url).toString();
  return newURL;
}
