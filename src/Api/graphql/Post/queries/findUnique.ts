import { queryField, arg } from '@nexus/schema'

export const PostFindUniqueQuery = queryField('findUniquePost', {
  type: 'Post',
  nullable: true,
  args: {
    where: arg({
      type: 'PostWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.post.findUnique({
      where,
      ...select,
    })
  },
})
