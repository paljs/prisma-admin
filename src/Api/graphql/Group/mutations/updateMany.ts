import { mutationField, arg, nonNull } from 'nexus'

export const GroupUpdateManyMutation = mutationField('updateManyGroup', {
  type: nonNull('BatchPayload'),
  args: {
    where: arg({
      type: 'GroupWhereInput',
    }),
    data: nonNull(
      arg({
        type: 'GroupUpdateManyMutationInput',
      }),
    ),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.group.updateMany(args as any)
  },
})
