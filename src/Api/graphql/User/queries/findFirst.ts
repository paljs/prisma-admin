import { queryField, arg } from '@nexus/schema'

export const UserFindFirstQuery = queryField('findFirstUser', {
  type: 'User',
  nullable: true,
  args: {
    where: 'UserWhereInput',
    orderBy: arg({ type: 'UserOrderByInput', list: true }),
    cursor: 'UserWhereUniqueInput',
    distinct: 'UserDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.user.findFirst({
      ...args,
      ...select,
    })
  },
})
