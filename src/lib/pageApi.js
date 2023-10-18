import { client } from "./contentful";

export const homePage = async () => {
  try {
    const entry = await client.getEntry("5bsrWRJ5MBlIBITbs61GRF");
    return entry;
  } catch (error) {
    console.error(error);
  }
};
//TODO Add about page fetcher
export const aboutPage = async (slug) => {
  try {
    const entries = await client.getEntries({
      content_type: "about",
      "fields.slug":slug,
    });
    return entries
  } catch (error) {
    console.error(error)
  }
};
