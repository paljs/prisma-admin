import { queryField, arg } from '@nexus/schema'

export const ListFindUniqueQuery = queryField('findUniqueList', {
  type: 'List',
  nullable: true,
  args: {
    where: arg({
      type: 'ListWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.list.findUnique({
      where,
      ...select,
    })
  },
})
