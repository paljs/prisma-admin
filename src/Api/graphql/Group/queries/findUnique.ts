import { queryField, arg } from '@nexus/schema'

export const GroupFindUniqueQuery = queryField('findUniqueGroup', {
  type: 'Group',
  nullable: true,
  args: {
    where: arg({
      type: 'GroupWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.group.findUnique({
      where,
      ...select,
    })
  },
})
