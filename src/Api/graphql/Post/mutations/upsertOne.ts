import { mutationField, arg, nonNull } from 'nexus'

export const PostUpsertOneMutation = mutationField('upsertOnePost', {
  type: nonNull('Post'),
  args: {
    where: nonNull(
      arg({
        type: 'PostWhereUniqueInput',
      }),
    ),
    create: nonNull(
      arg({
        type: 'PostCreateInput',
      }),
    ),
    update: nonNull(
      arg({
        type: 'PostUpdateInput',
      }),
    ),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.post.upsert({
      ...args,
      ...select,
    })
  },
})
