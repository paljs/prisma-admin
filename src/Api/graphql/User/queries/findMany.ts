import { queryField, arg, nonNull, list } from 'nexus'

export const UserFindManyQuery = queryField('findManyUser', {
  type: nonNull(list(nonNull('User'))),
  args: {
    where: 'UserWhereInput',
    orderBy: list(arg({ type: 'UserOrderByInput' })),
    cursor: 'UserWhereUniqueInput',
    distinct: 'UserScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.user.findMany({
      ...args,
      ...select,
    })
  },
})
