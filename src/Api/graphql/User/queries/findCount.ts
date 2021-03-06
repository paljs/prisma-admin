import { queryField, arg, nonNull, list } from 'nexus'

export const UserFindCountQuery = queryField('findManyUserCount', {
  type: nonNull('Int'),
  args: {
    where: 'UserWhereInput',
    orderBy: list(arg({ type: 'UserOrderByInput' })),
    cursor: 'UserWhereUniqueInput',
    distinct: 'UserScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.user.count(args as any)
  },
})
