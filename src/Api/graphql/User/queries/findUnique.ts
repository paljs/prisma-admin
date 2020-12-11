import { queryField, arg, nonNull } from '@nexus/schema'

export const UserFindUniqueQuery = queryField('findUniqueUser', {
  type: nonNull('User'),
  args: {
    where: arg({
      type: 'UserWhereUniqueInput',
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.user.findUnique({
      where,
      ...select,
    })
  },
})
