// import { GraphQLClient } from "graphql-request";

// const TOKEN = process.env.DATOCMS_API_TOKEN;
// const DATOCMS_API_URL = "https://graphql.datocms.com/";

// const datocms = new GraphQLClient(DATOCMS_API_URL, {
//   headers: {
//     authorization: `Bearer ${TOKEN}`,
//   },
// });

// export default datocms;

type RequestProps = {
  query: string;
  variables?: {};
};

import { GraphQLClient } from "graphql-request";
export function request({ query, variables }: RequestProps) {
  const endpoint = `https://graphql.datocms.com/`;
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
    },
  });
  return client.request(query, variables);
}
