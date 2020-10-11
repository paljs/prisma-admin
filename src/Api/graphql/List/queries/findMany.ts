import { queryField, arg } from '@nexus/schema'

export const ListFindManyQuery = queryField('findManyList', {
  type: 'List',
  nullable: true,
  list: true,
  args: {
    where: 'ListWhereInput',
    orderBy: arg({ type: 'ListOrderByInput', list: true }),
    cursor: 'ListWhereUniqueInput',
    distinct: 'ListDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.list.findMany({
      ...args,
      ...select,
    })
  },
})
