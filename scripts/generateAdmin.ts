import { generateAdmin, Schema } from '@prisma-tools/admin';
import defaultSchema from '../src/Api/graphql/schema/schema.json';
import path from 'path';

generateAdmin(path.resolve(__dirname, '../prisma/schema.prisma'), defaultSchema as Schema, {
  excludeFieldsByModel: {
    User: ['password'],
  },
  excludeQueriesAndMutations: ['updateMany', 'deleteMany', 'findCount'],
  schemaOutput: path.resolve(__dirname, '../src/Api/graphql/schema/schema.json'),
  graphqlOutput: path.resolve(__dirname, '../src/graphql'),
  pagesOutput: path.resolve(__dirname, '../src/pages/admin/models'),
});
