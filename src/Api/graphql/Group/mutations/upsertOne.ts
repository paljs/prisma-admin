import { mutationField, arg } from '@nexus/schema'

export const GroupUpsertOneMutation = mutationField('upsertOneGroup', {
  type: 'Group',
  nullable: false,
  args: {
    where: arg({
      type: 'GroupWhereUniqueInput',
      nullable: false,
    }),
    create: arg({
      type: 'GroupCreateInput',
      nullable: false,
    }),
    update: arg({
      type: 'GroupUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.group.upsert({
      ...args,
      ...select,
    })
  },
})
