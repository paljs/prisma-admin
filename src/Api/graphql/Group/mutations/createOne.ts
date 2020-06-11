import { mutationField, arg } from '@nexus/schema'

export const GroupCreateOneMutation = mutationField('createOneGroup', {
  type: 'Group',
  nullable: false,
  args: {
    data: arg({
      type: 'GroupCreateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.group.create({
      data,
      ...select,
    })
  },
})
