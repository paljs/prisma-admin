import { queryField, arg } from '@nexus/schema'

export const GroupFindCountQuery = queryField('findManyGroupCount', {
  type: 'Int',
  args: {
    where: 'GroupWhereInput',
    orderBy: arg({ type: 'GroupOrderByInput', list: true }),
    cursor: 'GroupWhereUniqueInput',
    distinct: 'GroupDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.group.count(args as any)
  },
})
