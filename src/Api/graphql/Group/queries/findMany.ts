import { queryField, arg } from '@nexus/schema'

export const GroupFindManyQuery = queryField('findManyGroup', {
  type: 'Group',
  nullable: true,
  list: true,
  args: {
    where: 'GroupWhereInput',
    orderBy: arg({ type: 'GroupOrderByInput', list: true }),
    cursor: 'GroupWhereUniqueInput',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.group.findMany({
      ...args,
      ...select,
    }) as any
  },
})
