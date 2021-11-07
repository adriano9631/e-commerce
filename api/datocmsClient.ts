import { GraphQLClient } from "graphql-request";

const TOKEN = process.env.DATOCMS_API_TOKEN;
const DATOCMS_API_URL = "https://graphql.datocms.com/";

const datocms = new GraphQLClient(DATOCMS_API_URL, {
  headers: {
    authorization: `Bearer ${TOKEN}`,
  },
});

export default datocms;
