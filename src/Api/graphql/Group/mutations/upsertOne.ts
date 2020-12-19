import { mutationField, arg, nonNull } from 'nexus'

export const GroupUpsertOneMutation = mutationField('upsertOneGroup', {
  type: nonNull('Group'),
  args: {
    where: nonNull(
      arg({
        type: 'GroupWhereUniqueInput',
      }),
    ),
    create: nonNull(
      arg({
        type: 'GroupCreateInput',
      }),
    ),
    update: nonNull(
      arg({
        type: 'GroupUpdateInput',
      }),
    ),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.group.upsert({
      ...args,
      ...select,
    })
  },
})
