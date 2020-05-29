import { ApolloError } from '@apollo/client';

export function getErrorMessage(error: ApolloError) {
  if (error.graphQLErrors) {
    for (const graphQLError of error.graphQLErrors) {
      if (graphQLError.extensions && graphQLError.extensions.code === 'BAD_USER_INPUT') {
        return graphQLError.message;
      }
    }
  }
  return error.message;
}
