import { generateAdmin } from '@prisma-tools/admin/dist/generateAdmin';
import { Schema } from '@prisma-tools/admin';
import defaultSchema from '../src/Api/graphql/schema/schema.json';
import path from 'path';

generateAdmin(path.resolve(__dirname, '../prisma/schema.prisma'), defaultSchema as Schema, {
  excludeFieldsByModel: {
    User: ['password'],
  },
  disableCreateGraphql: true,
  schemaOutput: path.resolve(__dirname, '../src/Api/graphql/schema/schema.json'),
  graphqlOutput: path.resolve(__dirname, '../src/graphql'),
  pagesOutput: path.resolve(__dirname, '../src/pages/admin/models'),
});
