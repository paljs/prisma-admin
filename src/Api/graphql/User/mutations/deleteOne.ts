import { mutationField, arg, nonNull } from 'nexus'

export const UserDeleteOneMutation = mutationField('deleteOneUser', {
  type: 'User',
  args: {
    where: nonNull(
      arg({
        type: 'UserWhereUniqueInput',
      }),
    ),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    await prisma.onDelete({ model: 'User', where })
    return prisma.user.delete({
      where,
      ...select,
    })
  },
})
