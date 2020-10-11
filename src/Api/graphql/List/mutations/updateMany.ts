import { mutationField, arg } from '@nexus/schema'

export const ListUpdateManyMutation = mutationField('updateManyList', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'ListWhereInput',
      nullable: true,
    }),
    data: arg({
      type: 'ListUpdateManyMutationInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.list.updateMany(args as any)
  },
})
