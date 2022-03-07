import { queryField, nonNull, list } from 'nexus'

export const ListFindCountQuery = queryField('findManyListCount', {
  type: nonNull('Int'),
  args: {
    where: 'ListWhereInput',
    orderBy: list('ListOrderByWithRelationInput'),
    cursor: 'ListWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ListScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.list.count(args as any)
  },
})
