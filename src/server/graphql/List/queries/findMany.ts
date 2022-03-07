import { queryField, nonNull, list } from 'nexus'

export const ListFindManyQuery = queryField('findManyList', {
  type: nonNull(list(nonNull('List'))),
  args: {
    where: 'ListWhereInput',
    orderBy: list('ListOrderByWithRelationInput'),
    cursor: 'ListWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ListScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.list.findMany({
      ...args,
      ...select,
    })
  },
})
