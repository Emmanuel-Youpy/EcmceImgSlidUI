import sanityClient from "@sanity/client";

import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: "fcyh0hju", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  useCdn: true,
  apiVersion: "2022-07-07",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;
