//https://api.github.com/graphql

import { ApolloClient, InMemoryCache, createHttpLink} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
    uri: "https://api.github.com/graphql",
})

const authLink = setContext((_, { headers }) => {
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.GITHUB_API_TOKEN}`,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":"Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
      }
    }
});
const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
})

export default client;