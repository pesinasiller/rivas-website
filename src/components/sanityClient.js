import imageUrlBuilder from "@sanity/image-url";
const sanityClient = require("@sanity/client");

export const client = sanityClient({
  projectId: "XXXXXXXX",
  dataset: "XXXXXX",
  useCdn: true
});

const builder = imageUrlBuilder(client);
export function urlForImage(source) {
  return builder.image(source);
}
