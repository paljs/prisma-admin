import { queryField, arg, nonNull } from '@nexus/schema'

export const ListFindUniqueQuery = queryField('findUniqueList', {
  type: nonNull('List'),
  args: {
    where: arg({
      type: 'ListWhereUniqueInput',
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.list.findUnique({
      where,
      ...select,
    })
  },
})
