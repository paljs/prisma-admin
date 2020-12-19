import { queryField, arg, nonNull } from 'nexus'

export const ListFindUniqueQuery = queryField('findUniqueList', {
  type: 'List',
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
