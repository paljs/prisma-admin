import { queryField, arg } from '@nexus/schema'

export const GroupFindFirstQuery = queryField('findFirstGroup', {
  type: 'Group',
  nullable: true,
  args: {
    where: 'GroupWhereInput',
    orderBy: arg({ type: 'GroupOrderByInput', list: true }),
    cursor: 'GroupWhereUniqueInput',
    distinct: 'GroupDistinctFieldEnum',
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
