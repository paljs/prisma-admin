import { mutationField, arg, nonNull } from 'nexus'

export const PostCreateOneMutation = mutationField('createOnePost', {
  type: nonNull('Post'),
  args: {
    data: nonNull(
      arg({
        type: 'PostCreateInput',
      }),
    ),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.post.create({
      data,
      ...select,
    })
  },
})
