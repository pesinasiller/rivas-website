import imageUrlBuilder from "@sanity/image-url";
const sanityClient = require("@sanity/client");

export const client = sanityClient({
  projectId: "f8rjnwu4",
  dataset: "rivas",
  useCdn: true
});

const builder = imageUrlBuilder(client);
export function urlForImage(source) {
  return builder.image(source);
}
