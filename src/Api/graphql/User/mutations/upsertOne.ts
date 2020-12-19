import { mutationField, arg, nonNull } from 'nexus'

export const UserUpsertOneMutation = mutationField('upsertOneUser', {
  type: nonNull('User'),
  args: {
    where: nonNull(
      arg({
        type: 'UserWhereUniqueInput',
      }),
    ),
    create: nonNull(
      arg({
        type: 'UserCreateInput',
      }),
    ),
    update: nonNull(
      arg({
        type: 'UserUpdateInput',
      }),
    ),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.user.upsert({
      ...args,
      ...select,
    })
  },
})
