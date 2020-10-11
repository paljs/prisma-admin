import { queryField, arg } from '@nexus/schema'

export const ListFindOneQuery = queryField('findOneList', {
  type: 'List',
  nullable: true,
  args: {
    where: arg({
      type: 'ListWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.list.findOne({
      where,
      ...select,
    })
  },
})
