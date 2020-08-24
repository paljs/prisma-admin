import { mutationField, arg } from '@nexus/schema'

export const GroupUpdateOneMutation = mutationField('updateOneGroup', {
  type: 'Group',
  nullable: false,
  args: {
    where: arg({
      type: 'GroupWhereUniqueInput',
      nullable: false,
    }),
    data: arg({
      type: 'GroupUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.group.update({
      where,
      data,
      ...select,
    }) as any
  },
})
