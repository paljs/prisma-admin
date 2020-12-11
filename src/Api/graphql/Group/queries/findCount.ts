import { queryField, arg, nonNull, list } from '@nexus/schema'

export const GroupFindCountQuery = queryField('findManyGroupCount', {
  type: nonNull('Int'),
  args: {
    where: 'GroupWhereInput',
    orderBy: list(arg({ type: 'GroupOrderByInput' })),
    cursor: 'GroupWhereUniqueInput',
    distinct: 'GroupScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.group.count(args as any)
  },
})
