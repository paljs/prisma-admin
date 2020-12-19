import { queryField, arg, nonNull } from 'nexus'

export const UserFindUniqueQuery = queryField('findUniqueUser', {
  type: 'User',
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
