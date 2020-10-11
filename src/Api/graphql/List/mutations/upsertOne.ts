import { mutationField, arg } from '@nexus/schema'

export const ListUpsertOneMutation = mutationField('upsertOneList', {
  type: 'List',
  nullable: false,
  args: {
    where: arg({
      type: 'ListWhereUniqueInput',
      nullable: false,
    }),
    create: arg({
      type: 'ListCreateInput',
      nullable: false,
    }),
    update: arg({
      type: 'ListUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.list.upsert({
      ...args,
      ...select,
    })
  },
})
