import { queryField, arg } from '@nexus/schema'

export const PostFindManyCountQuery = queryField('findManyPostCount', {
  type: 'Int',
  args: {
    where: 'PostWhereInput',
    orderBy: arg({ type: 'PostOrderByInput', list: true }),
    cursor: 'PostWhereUniqueInput',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.post.count(args)
  },
})
