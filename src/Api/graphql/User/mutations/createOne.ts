import { mutationField, arg, nonNull } from 'nexus'

export const UserCreateOneMutation = mutationField('createOneUser', {
  type: nonNull('User'),
  args: {
    data: nonNull(
      arg({
        type: 'UserCreateInput',
      }),
    ),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.user.create({
      data,
      ...select,
    })
  },
})
