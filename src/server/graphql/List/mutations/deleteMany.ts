import { mutationField, nonNull } from 'nexus'

export const ListDeleteManyMutation = mutationField('deleteManyList', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'ListWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.list.deleteMany({ where } as any)
  },
})
