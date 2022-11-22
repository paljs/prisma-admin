import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { schema } from 'server/nexusSchema';
import { createContext } from 'server/context';
import { NextApiRequest, NextApiResponse } from 'next';
import { ApolloServerPluginLandingPageDisabled } from '@apollo/server/plugin/disabled';
import { ApolloServerPluginLandingPageGraphQLPlayground } from '@apollo/server-plugin-landing-page-graphql-playground';

type NextApi = {
  req: NextApiRequest;
  res: NextApiResponse;
};

const apolloServer = new ApolloServer<NextApi>({
  schema,
  plugins: [
    process.env.NODE_ENV === 'production'
      ? ApolloServerPluginLandingPageDisabled()
      : ApolloServerPluginLandingPageGraphQLPlayground(),
  ],
});

export default startServerAndCreateNextHandler(apolloServer, {
  context: createContext,
});
