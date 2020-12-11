import { mutationField, arg, nonNull } from '@nexus/schema'

export const GroupCreateOneMutation = mutationField('createOneGroup', {
  type: nonNull('Group'),
  args: {
    data: nonNull(
      arg({
        type: 'GroupCreateInput',
      }),
    ),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.group.create({
      data,
      ...select,
    })
  },
})
