import { queryField, arg, list } from 'nexus'

export const ListFindFirstQuery = queryField('findFirstList', {
  type: 'List',
  args: {
    where: 'ListWhereInput',
    orderBy: list(arg({ type: 'ListOrderByInput' })),
    cursor: 'ListWhereUniqueInput',
    distinct: 'ListScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.list.findFirst({
      ...args,
      ...select,
    })
  },
})
