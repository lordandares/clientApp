import { gql } from 'graphql-tag'

export const queryClientList = gql`
  query QueryClientList {
    queryClientList {
      id
      firstName
      lastName
      email
    }
  }
`
export const findClientById = (id: string) => {
  const query = `
  query FindClientById {
    findClientById(id: "***") {
            id
            firstName
            lastName
            email
            events {
                id
                title
                startDateTime
            }
        }
    }
  `
  query.replace('***', id)
  return gql`
    ${query}
  `
}
