import { ApolloClient, InMemoryCache } from '@apollo/client'

const getBaseAPIUri = (): string => {
  const { NODE_ENV } = process.env

  switch (NODE_ENV) {
    case 'development':
      return 'https://flyby-gateway.herokuapp.com/'
    case 'production':
      return 'https://flyby-gateway.herokuapp.com/'
    default:
      return 'https://flyby-gateway.herokuapp.com/'
  }
}

export const client = new ApolloClient({
  uri: getBaseAPIUri(),
  cache: new InMemoryCache(),
})
