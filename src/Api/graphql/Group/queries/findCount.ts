import { queryField, arg } from '@nexus/schema'

export const GroupFindManyCountQuery = queryField('findManyGroupCount', {
  type: 'Int',
  args: {
    where: 'GroupWhereInput',
    orderBy: arg({ type: 'GroupOrderByInput', list: true }),
    cursor: 'GroupWhereUniqueInput',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.group.count(args)
  },
})
