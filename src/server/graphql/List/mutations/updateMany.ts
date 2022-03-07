import { mutationField, nonNull } from 'nexus'

export const ListUpdateManyMutation = mutationField('updateManyList', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('ListUpdateManyMutationInput'),
    where: 'ListWhereInput',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.list.updateMany(args as any)
  },
})
