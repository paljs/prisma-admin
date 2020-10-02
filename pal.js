module.exports = {
  backend: {
    generator: 'nexus',
    onDelete: true,
    output: 'src/Api/graphql',
    excludeQueriesAndMutations: ['aggregate'],
  },
  frontend: {
    admin: true,
  },
};
