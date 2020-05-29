import { ApolloServer } from 'apollo-server-micro';
import { schema } from 'Api/schema';
import { createContext } from 'Api/context';

const apolloServer = new ApolloServer({
  schema,
  context: createContext,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: '/api/graphql' });
