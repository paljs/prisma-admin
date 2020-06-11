import { createTypes } from '@prisma-tools/nexus';

createTypes({
  modelsOutput: 'src/Api/graphql',
  onDelete: true,
  nexusSchema: true,
  excludeFieldsByModel: {
    User: ['password'],
  },
  excludeQueriesAndMutations: ['deleteMany', 'updateMany'],
});
