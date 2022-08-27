import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-ca-central-1.hygraph.com/v2/cl7b7g0xx3mtn01ujf2x1ezzt/master',
  cache: new InMemoryCache()
})