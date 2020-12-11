import { queryField, arg, nonNull, list } from '@nexus/schema'

export const ListFindCountQuery = queryField('findManyListCount', {
  type: nonNull('Int'),
  args: {
    where: 'ListWhereInput',
    orderBy: list(arg({ type: 'ListOrderByInput' })),
    cursor: 'ListWhereUniqueInput',
    distinct: 'ListScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.list.count(args as any)
  },
})
