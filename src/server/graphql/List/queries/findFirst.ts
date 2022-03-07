import { queryField, list } from 'nexus'

export const ListFindFirstQuery = queryField('findFirstList', {
  type: 'List',
  args: {
    where: 'ListWhereInput',
    orderBy: list('ListOrderByWithRelationInput'),
    cursor: 'ListWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ListScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.list.findFirst({
      ...args,
      ...select,
    })
  },
})
