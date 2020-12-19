import { queryField, arg, list } from 'nexus'

export const UserFindFirstQuery = queryField('findFirstUser', {
  type: 'User',
  args: {
    where: 'UserWhereInput',
    orderBy: list(arg({ type: 'UserOrderByInput' })),
    cursor: 'UserWhereUniqueInput',
    distinct: 'UserScalarFieldEnum',
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
