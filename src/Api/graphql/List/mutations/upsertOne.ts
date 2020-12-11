import { mutationField, arg, nonNull } from '@nexus/schema'

export const ListUpsertOneMutation = mutationField('upsertOneList', {
  type: nonNull('List'),
  args: {
    where: nonNull(
      arg({
        type: 'ListWhereUniqueInput',
      }),
    ),
    create: nonNull(
      arg({
        type: 'ListCreateInput',
      }),
    ),
    update: nonNull(
      arg({
        type: 'ListUpdateInput',
      }),
    ),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.list.upsert({
      ...args,
      ...select,
    })
  },
})
