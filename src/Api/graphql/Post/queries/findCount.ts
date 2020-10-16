import { queryField, arg } from '@nexus/schema'

export const PostFindCountQuery = queryField('findManyPostCount', {
  type: 'Int',
  args: {
    where: 'PostWhereInput',
    orderBy: arg({ type: 'PostOrderByInput', list: true }),
    cursor: 'PostWhereUniqueInput',
    distinct: 'PostDistinctFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.post.count(args as any)
  },
})
