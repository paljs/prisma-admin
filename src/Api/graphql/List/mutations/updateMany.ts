import { mutationField, arg, nonNull } from 'nexus'

export const ListUpdateManyMutation = mutationField('updateManyList', {
  type: nonNull('BatchPayload'),
  args: {
    where: arg({
      type: 'ListWhereInput',
    }),
    data: nonNull(
      arg({
        type: 'ListUpdateManyMutationInput',
      }),
    ),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.list.updateMany(args as any)
  },
})
