import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: import.meta.env.VITE_API_URL,
  cache: new InMemoryCache(),
  headers: {
    'Authorization': `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
  },
})

// vai fazer o cache na memoria da aplicação como variaveis