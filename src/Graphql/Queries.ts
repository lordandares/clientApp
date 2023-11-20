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
export const findClientById = (id: string | undefined | null) => {
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
  const queryId = query.replace('***', id || '')
  return gql`
    ${queryId}
  `
}
