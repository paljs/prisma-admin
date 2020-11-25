import { queryField, arg } from '@nexus/schema'

export const UserFindUniqueQuery = queryField('findUniqueUser', {
  type: 'User',
  nullable: true,
  args: {
    where: arg({
      type: 'UserWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.user.findUnique({
      where,
      ...select,
    })
  },
})
