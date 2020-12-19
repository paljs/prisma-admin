import { mutationField, arg, nonNull } from 'nexus'

export const ListCreateOneMutation = mutationField('createOneList', {
  type: nonNull('List'),
  args: {
    data: nonNull(
      arg({
        type: 'ListCreateInput',
      }),
    ),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.list.create({
      data,
      ...select,
    })
  },
})
