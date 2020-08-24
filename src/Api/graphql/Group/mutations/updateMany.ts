import { mutationField, arg } from '@nexus/schema'

export const GroupUpdateManyMutation = mutationField('updateManyGroup', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'GroupWhereInput',
      nullable: true,
    }),
    data: arg({
      type: 'GroupUpdateManyMutationInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.group.updateMany(args)
  },
})
