export const GetImageUrl = (name) => {
  const imagePath = new URL(`../assets/images/${name}.png`, import.meta.url).href;
  return imagePath;
}