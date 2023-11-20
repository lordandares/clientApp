import { ApolloClient, InMemoryCache } from '@apollo/client'

const GRPHQL_SERVER = 'http://localhost:3000/dev/graphql'

const client = new ApolloClient({
  uri: GRPHQL_SERVER,
  cache: new InMemoryCache(),
})

export default client
