import { queryField, arg, list } from '@nexus/schema'

export const GroupFindFirstQuery = queryField('findFirstGroup', {
  type: 'Group',
  args: {
    where: 'GroupWhereInput',
    orderBy: list(arg({ type: 'GroupOrderByInput' })),
    cursor: 'GroupWhereUniqueInput',
    distinct: 'GroupScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.group.findFirst({
      ...args,
      ...select,
    })
  },
})
