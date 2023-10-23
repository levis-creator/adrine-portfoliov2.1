import { client } from "./contentful";

export const homePage = async () => {
  try {
    const entry = await client.getEntry("5bsrWRJ5MBlIBITbs61GRF");
    return entry;
  } catch (error) {
    console.error(error);
  }
};

export const aboutPage = async (slug) => {
  try {
    const entries = await client.getEntries({
      content_type: "about",
      "fields.slug": slug,
    });
    return entries;
  } catch (error) {
    console.error(error);
  }
};
export const servicePage = async () => {
  try {
    const entries = await client.getEntry("6E95uft3tmL1cfMfwfK2e1");
    return entries;
  } catch (error) {
    console.log(error);
  }
};
export const services = async () => {
  try {
    const entries = await client.getEntries({
      content_type: "services",
    });
    return entries;
  } catch (error) {
    console.error(error);
  }
};
