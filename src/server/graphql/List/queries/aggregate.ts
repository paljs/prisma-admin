import { queryField, list } from 'nexus'

export const ListAggregateQuery = queryField('aggregateList', {
  type: 'AggregateList',
  args: {
    where: 'ListWhereInput',
    orderBy: list('ListOrderByWithRelationInput'),
    cursor: 'ListWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.list.aggregate({ ...args, ...select }) as any
  },
})
