import { queryField, arg } from '@nexus/schema'

export const ListFindCountQuery = queryField('findManyListCount', {
  type: 'Int',
  args: {
    where: 'ListWhereInput',
    orderBy: arg({ type: 'ListOrderByInput', list: true }),
    cursor: 'ListWhereUniqueInput',
    distinct: 'ListDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.list.count(args as any)
  },
})
