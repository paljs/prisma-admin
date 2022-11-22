import { enumType, inputObjectType, objectType } from 'nexus'

export const CommentScalarFieldEnum = enumType({
  name: 'CommentScalarFieldEnum',
  members: ['id', 'contain', 'postId', 'authorId', 'createdAt', 'updatedAt'],
})

export const GroupScalarFieldEnum = enumType({
  name: 'GroupScalarFieldEnum',
  members: ['id', 'name', 'createdAt', 'updatedAt'],
})

export const ListScalarFieldEnum = enumType({
  name: 'ListScalarFieldEnum',
  members: ['id', 'integer', 'float', 'string', 'enums', 'boolean'],
})

export const PostScalarFieldEnum = enumType({
  name: 'PostScalarFieldEnum',
  members: ['id', 'published', 'title', 'authorId', 'createdAt', 'updatedAt'],
})

export const QueryMode = enumType({
  name: 'QueryMode',
  members: ['default', 'insensitive'],
})

export const SortOrder = enumType({
  name: 'SortOrder',
  members: ['asc', 'desc'],
})

export const TransactionIsolationLevel = enumType({
  name: 'TransactionIsolationLevel',
  members: [
    'ReadUncommitted',
    'ReadCommitted',
    'RepeatableRead',
    'Serializable',
  ],
})

export const UserScalarFieldEnum = enumType({
  name: 'UserScalarFieldEnum',
  members: ['id', 'createdAt', 'email', 'name', 'password', 'groupId'],
})

export const Rols = enumType({
  name: 'Rols',
  members: ['USER', 'ADMIN'],
})

export const UserWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'UserWhereInput' })
    t.list.field('OR', { type: 'UserWhereInput' })
    t.list.field('NOT', { type: 'UserWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('email', { type: 'StringFilter' })
    t.field('name', { type: 'StringNullableFilter' })
    t.field('password', { type: 'StringFilter' })
    t.field('posts', { type: 'PostListRelationFilter' })
    t.field('group', { type: 'GroupWhereInput' })
    t.field('groupId', { type: 'IntNullableFilter' })
    t.field('comments', { type: 'CommentListRelationFilter' })
  },
})

export const UserOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('email', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('password', { type: 'SortOrder' })
    t.field('posts', { type: 'PostOrderByRelationAggregateInput' })
    t.field('group', { type: 'GroupOrderByWithRelationInput' })
    t.field('groupId', { type: 'SortOrder' })
    t.field('comments', { type: 'CommentOrderByRelationAggregateInput' })
  },
})

export const UserWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('email', { type: 'String' })
  },
})

export const UserOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('email', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('password', { type: 'SortOrder' })
    t.field('groupId', { type: 'SortOrder' })
    t.field('_count', { type: 'UserCountOrderByAggregateInput' })
    t.field('_avg', { type: 'UserAvgOrderByAggregateInput' })
    t.field('_max', { type: 'UserMaxOrderByAggregateInput' })
    t.field('_min', { type: 'UserMinOrderByAggregateInput' })
    t.field('_sum', { type: 'UserSumOrderByAggregateInput' })
  },
})

export const UserScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'UserScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'UserScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'UserScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'IntWithAggregatesFilter' })
    t.field('createdAt', { type: 'DateTimeWithAggregatesFilter' })
    t.field('email', { type: 'StringWithAggregatesFilter' })
    t.field('name', { type: 'StringNullableWithAggregatesFilter' })
    t.field('password', { type: 'StringWithAggregatesFilter' })
    t.field('groupId', { type: 'IntNullableWithAggregatesFilter' })
  },
})

export const PostWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'PostWhereInput' })
    t.list.field('OR', { type: 'PostWhereInput' })
    t.list.field('NOT', { type: 'PostWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('published', { type: 'BoolFilter' })
    t.field('title', { type: 'StringFilter' })
    t.field('author', { type: 'UserWhereInput' })
    t.field('authorId', { type: 'IntNullableFilter' })
    t.field('comments', { type: 'CommentListRelationFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('updatedAt', { type: 'DateTimeFilter' })
  },
})

export const PostOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('published', { type: 'SortOrder' })
    t.field('title', { type: 'SortOrder' })
    t.field('author', { type: 'UserOrderByWithRelationInput' })
    t.field('authorId', { type: 'SortOrder' })
    t.field('comments', { type: 'CommentOrderByRelationAggregateInput' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const PostWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
  },
})

export const PostOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('published', { type: 'SortOrder' })
    t.field('title', { type: 'SortOrder' })
    t.field('authorId', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
    t.field('_count', { type: 'PostCountOrderByAggregateInput' })
    t.field('_avg', { type: 'PostAvgOrderByAggregateInput' })
    t.field('_max', { type: 'PostMaxOrderByAggregateInput' })
    t.field('_min', { type: 'PostMinOrderByAggregateInput' })
    t.field('_sum', { type: 'PostSumOrderByAggregateInput' })
  },
})

export const PostScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'PostScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'PostScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'PostScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'IntWithAggregatesFilter' })
    t.field('published', { type: 'BoolWithAggregatesFilter' })
    t.field('title', { type: 'StringWithAggregatesFilter' })
    t.field('authorId', { type: 'IntNullableWithAggregatesFilter' })
    t.field('createdAt', { type: 'DateTimeWithAggregatesFilter' })
    t.field('updatedAt', { type: 'DateTimeWithAggregatesFilter' })
  },
})

export const CommentWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'CommentWhereInput' })
    t.list.field('OR', { type: 'CommentWhereInput' })
    t.list.field('NOT', { type: 'CommentWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('contain', { type: 'StringFilter' })
    t.field('post', { type: 'PostWhereInput' })
    t.field('postId', { type: 'IntFilter' })
    t.field('author', { type: 'UserWhereInput' })
    t.field('authorId', { type: 'IntNullableFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('updatedAt', { type: 'DateTimeFilter' })
  },
})

export const CommentOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('contain', { type: 'SortOrder' })
    t.field('post', { type: 'PostOrderByWithRelationInput' })
    t.field('postId', { type: 'SortOrder' })
    t.field('author', { type: 'UserOrderByWithRelationInput' })
    t.field('authorId', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const CommentWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
  },
})

export const CommentOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('contain', { type: 'SortOrder' })
    t.field('postId', { type: 'SortOrder' })
    t.field('authorId', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
    t.field('_count', { type: 'CommentCountOrderByAggregateInput' })
    t.field('_avg', { type: 'CommentAvgOrderByAggregateInput' })
    t.field('_max', { type: 'CommentMaxOrderByAggregateInput' })
    t.field('_min', { type: 'CommentMinOrderByAggregateInput' })
    t.field('_sum', { type: 'CommentSumOrderByAggregateInput' })
  },
})

export const CommentScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'CommentScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'CommentScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'CommentScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'IntWithAggregatesFilter' })
    t.field('contain', { type: 'StringWithAggregatesFilter' })
    t.field('postId', { type: 'IntWithAggregatesFilter' })
    t.field('authorId', { type: 'IntNullableWithAggregatesFilter' })
    t.field('createdAt', { type: 'DateTimeWithAggregatesFilter' })
    t.field('updatedAt', { type: 'DateTimeWithAggregatesFilter' })
  },
})

export const GroupWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'GroupWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'GroupWhereInput' })
    t.list.field('OR', { type: 'GroupWhereInput' })
    t.list.field('NOT', { type: 'GroupWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('name', { type: 'StringFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('updatedAt', { type: 'DateTimeFilter' })
    t.field('users', { type: 'UserListRelationFilter' })
  },
})

export const GroupOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'GroupOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
    t.field('users', { type: 'UserOrderByRelationAggregateInput' })
  },
})

export const GroupWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'GroupWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
  },
})

export const GroupOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'GroupOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
    t.field('_count', { type: 'GroupCountOrderByAggregateInput' })
    t.field('_avg', { type: 'GroupAvgOrderByAggregateInput' })
    t.field('_max', { type: 'GroupMaxOrderByAggregateInput' })
    t.field('_min', { type: 'GroupMinOrderByAggregateInput' })
    t.field('_sum', { type: 'GroupSumOrderByAggregateInput' })
  },
})

export const GroupScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'GroupScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'GroupScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'GroupScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'GroupScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'IntWithAggregatesFilter' })
    t.field('name', { type: 'StringWithAggregatesFilter' })
    t.field('createdAt', { type: 'DateTimeWithAggregatesFilter' })
    t.field('updatedAt', { type: 'DateTimeWithAggregatesFilter' })
  },
})

export const ListWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ListWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'ListWhereInput' })
    t.list.field('OR', { type: 'ListWhereInput' })
    t.list.field('NOT', { type: 'ListWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('integer', { type: 'IntNullableListFilter' })
    t.field('float', { type: 'FloatNullableListFilter' })
    t.field('string', { type: 'StringNullableListFilter' })
    t.field('enums', { type: 'EnumRolsNullableListFilter' })
    t.field('boolean', { type: 'BoolNullableListFilter' })
  },
})

export const ListOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ListOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('integer', { type: 'SortOrder' })
    t.field('float', { type: 'SortOrder' })
    t.field('string', { type: 'SortOrder' })
    t.field('enums', { type: 'SortOrder' })
    t.field('boolean', { type: 'SortOrder' })
  },
})

export const ListWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ListWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
  },
})

export const ListOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ListOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('integer', { type: 'SortOrder' })
    t.field('float', { type: 'SortOrder' })
    t.field('string', { type: 'SortOrder' })
    t.field('enums', { type: 'SortOrder' })
    t.field('boolean', { type: 'SortOrder' })
    t.field('_count', { type: 'ListCountOrderByAggregateInput' })
    t.field('_avg', { type: 'ListAvgOrderByAggregateInput' })
    t.field('_max', { type: 'ListMaxOrderByAggregateInput' })
    t.field('_min', { type: 'ListMinOrderByAggregateInput' })
    t.field('_sum', { type: 'ListSumOrderByAggregateInput' })
  },
})

export const ListScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ListScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'ListScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'ListScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'ListScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'IntWithAggregatesFilter' })
    t.field('integer', { type: 'IntNullableListFilter' })
    t.field('float', { type: 'FloatNullableListFilter' })
    t.field('string', { type: 'StringNullableListFilter' })
    t.field('enums', { type: 'EnumRolsNullableListFilter' })
    t.field('boolean', { type: 'BoolNullableListFilter' })
  },
})

export const UserCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('email', { type: 'String' })
    t.field('name', { type: 'String' })
    t.nonNull.field('password', { type: 'String' })
    t.field('posts', { type: 'PostCreateNestedManyWithoutAuthorInput' })
    t.field('group', { type: 'GroupCreateNestedOneWithoutUsersInput' })
    t.field('comments', { type: 'CommentCreateNestedManyWithoutAuthorInput' })
  },
})

export const UserUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('email', { type: 'String' })
    t.field('name', { type: 'String' })
    t.nonNull.field('password', { type: 'String' })
    t.field('posts', {
      type: 'PostUncheckedCreateNestedManyWithoutAuthorInput',
    })
    t.field('groupId', { type: 'Int' })
    t.field('comments', {
      type: 'CommentUncheckedCreateNestedManyWithoutAuthorInput',
    })
  },
})

export const UserUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('posts', { type: 'PostUpdateManyWithoutAuthorNestedInput' })
    t.field('group', { type: 'GroupUpdateOneWithoutUsersNestedInput' })
    t.field('comments', { type: 'CommentUpdateManyWithoutAuthorNestedInput' })
  },
})

export const UserUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('posts', {
      type: 'PostUncheckedUpdateManyWithoutAuthorNestedInput',
    })
    t.field('groupId', { type: 'NullableIntFieldUpdateOperationsInput' })
    t.field('comments', {
      type: 'CommentUncheckedUpdateManyWithoutAuthorNestedInput',
    })
  },
})

export const UserCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('email', { type: 'String' })
    t.field('name', { type: 'String' })
    t.nonNull.field('password', { type: 'String' })
    t.field('groupId', { type: 'Int' })
  },
})

export const UserUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateManyMutationInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
  },
})

export const UserUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('groupId', { type: 'NullableIntFieldUpdateOperationsInput' })
  },
})

export const PostCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateInput',
  definition(t) {
    t.field('published', { type: 'Boolean' })
    t.nonNull.field('title', { type: 'String' })
    t.field('author', { type: 'UserCreateNestedOneWithoutPostsInput' })
    t.field('comments', { type: 'CommentCreateNestedManyWithoutPostInput' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const PostUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('published', { type: 'Boolean' })
    t.nonNull.field('title', { type: 'String' })
    t.field('authorId', { type: 'Int' })
    t.field('comments', {
      type: 'CommentUncheckedCreateNestedManyWithoutPostInput',
    })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const PostUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpdateInput',
  definition(t) {
    t.field('published', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('author', { type: 'UserUpdateOneWithoutPostsNestedInput' })
    t.field('comments', { type: 'CommentUpdateManyWithoutPostNestedInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const PostUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('published', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('authorId', { type: 'NullableIntFieldUpdateOperationsInput' })
    t.field('comments', {
      type: 'CommentUncheckedUpdateManyWithoutPostNestedInput',
    })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const PostCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('published', { type: 'Boolean' })
    t.nonNull.field('title', { type: 'String' })
    t.field('authorId', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const PostUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpdateManyMutationInput',
  definition(t) {
    t.field('published', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const PostUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('published', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('authorId', { type: 'NullableIntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const CommentCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentCreateInput',
  definition(t) {
    t.nonNull.field('contain', { type: 'String' })
    t.nonNull.field('post', { type: 'PostCreateNestedOneWithoutCommentsInput' })
    t.field('author', { type: 'UserCreateNestedOneWithoutCommentsInput' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const CommentUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('contain', { type: 'String' })
    t.nonNull.field('postId', { type: 'Int' })
    t.field('authorId', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const CommentUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUpdateInput',
  definition(t) {
    t.field('contain', { type: 'StringFieldUpdateOperationsInput' })
    t.field('post', { type: 'PostUpdateOneRequiredWithoutCommentsNestedInput' })
    t.field('author', { type: 'UserUpdateOneWithoutCommentsNestedInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const CommentUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('contain', { type: 'StringFieldUpdateOperationsInput' })
    t.field('postId', { type: 'IntFieldUpdateOperationsInput' })
    t.field('authorId', { type: 'NullableIntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const CommentCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('contain', { type: 'String' })
    t.nonNull.field('postId', { type: 'Int' })
    t.field('authorId', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const CommentUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUpdateManyMutationInput',
  definition(t) {
    t.field('contain', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const CommentUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('contain', { type: 'StringFieldUpdateOperationsInput' })
    t.field('postId', { type: 'IntFieldUpdateOperationsInput' })
    t.field('authorId', { type: 'NullableIntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const GroupCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'GroupCreateInput',
  definition(t) {
    t.nonNull.field('name', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('users', { type: 'UserCreateNestedManyWithoutGroupInput' })
  },
})

export const GroupUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'GroupUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('name', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('users', { type: 'UserUncheckedCreateNestedManyWithoutGroupInput' })
  },
})

export const GroupUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'GroupUpdateInput',
  definition(t) {
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('users', { type: 'UserUpdateManyWithoutGroupNestedInput' })
  },
})

export const GroupUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'GroupUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('users', { type: 'UserUncheckedUpdateManyWithoutGroupNestedInput' })
  },
})

export const GroupCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'GroupCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('name', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const GroupUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'GroupUpdateManyMutationInput',
  definition(t) {
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const GroupUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'GroupUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const ListCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ListCreateInput',
  definition(t) {
    t.list.field('integer', { type: 'Int' })
    t.list.field('float', { type: 'Float' })
    t.list.field('string', { type: 'String' })
    t.list.field('enums', { type: 'Rols' })
    t.list.field('boolean', { type: 'Boolean' })
  },
})

export const ListUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ListUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.list.field('integer', { type: 'Int' })
    t.list.field('float', { type: 'Float' })
    t.list.field('string', { type: 'String' })
    t.list.field('enums', { type: 'Rols' })
    t.list.field('boolean', { type: 'Boolean' })
  },
})

export const ListUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ListUpdateInput',
  definition(t) {
    t.list.field('integer', { type: 'Int' })
    t.list.field('float', { type: 'Float' })
    t.list.field('string', { type: 'String' })
    t.list.field('enums', { type: 'Rols' })
    t.list.field('boolean', { type: 'Boolean' })
  },
})

export const ListUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ListUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.list.field('integer', { type: 'Int' })
    t.list.field('float', { type: 'Float' })
    t.list.field('string', { type: 'String' })
    t.list.field('enums', { type: 'Rols' })
    t.list.field('boolean', { type: 'Boolean' })
  },
})

export const ListCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ListCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.list.field('integer', { type: 'Int' })
    t.list.field('float', { type: 'Float' })
    t.list.field('string', { type: 'String' })
    t.list.field('enums', { type: 'Rols' })
    t.list.field('boolean', { type: 'Boolean' })
  },
})

export const ListUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ListUpdateManyMutationInput',
  definition(t) {
    t.list.field('integer', { type: 'Int' })
    t.list.field('float', { type: 'Float' })
    t.list.field('string', { type: 'String' })
    t.list.field('enums', { type: 'Rols' })
    t.list.field('boolean', { type: 'Boolean' })
  },
})

export const ListUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ListUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.list.field('integer', { type: 'Int' })
    t.list.field('float', { type: 'Float' })
    t.list.field('string', { type: 'String' })
    t.list.field('enums', { type: 'Rols' })
    t.list.field('boolean', { type: 'Boolean' })
  },
})

export const IntFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'IntFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntFilter' })
  },
})

export const DateTimeFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DateTimeFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.list.field('in', { type: 'DateTime' })
    t.list.field('notIn', { type: 'DateTime' })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
    t.field('not', { type: 'NestedDateTimeFilter' })
  },
})

export const StringFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('mode', { type: 'QueryMode' })
    t.field('not', { type: 'NestedStringFilter' })
  },
})

export const StringNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringNullableFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('mode', { type: 'QueryMode' })
    t.field('not', { type: 'NestedStringNullableFilter' })
  },
})

export const PostListRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostListRelationFilter',
  definition(t) {
    t.field('every', { type: 'PostWhereInput' })
    t.field('some', { type: 'PostWhereInput' })
    t.field('none', { type: 'PostWhereInput' })
  },
})

export const GroupRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'GroupRelationFilter',
  definition(t) {
    t.field('is', { type: 'GroupWhereInput' })
    t.field('isNot', { type: 'GroupWhereInput' })
  },
})

export const IntNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'IntNullableFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntNullableFilter' })
  },
})

export const CommentListRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentListRelationFilter',
  definition(t) {
    t.field('every', { type: 'CommentWhereInput' })
    t.field('some', { type: 'CommentWhereInput' })
    t.field('none', { type: 'CommentWhereInput' })
  },
})

export const PostOrderByRelationAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostOrderByRelationAggregateInput',
  definition(t) {
    t.field('_count', { type: 'SortOrder' })
  },
})

export const CommentOrderByRelationAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentOrderByRelationAggregateInput',
  definition(t) {
    t.field('_count', { type: 'SortOrder' })
  },
})

export const UserCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('email', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('password', { type: 'SortOrder' })
    t.field('groupId', { type: 'SortOrder' })
  },
})

export const UserAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('groupId', { type: 'SortOrder' })
  },
})

export const UserMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('email', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('password', { type: 'SortOrder' })
    t.field('groupId', { type: 'SortOrder' })
  },
})

export const UserMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('email', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('password', { type: 'SortOrder' })
    t.field('groupId', { type: 'SortOrder' })
  },
})

export const UserSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('groupId', { type: 'SortOrder' })
  },
})

export const IntWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'IntWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_avg', { type: 'NestedFloatFilter' })
    t.field('_sum', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedIntFilter' })
    t.field('_max', { type: 'NestedIntFilter' })
  },
})

export const DateTimeWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DateTimeWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.list.field('in', { type: 'DateTime' })
    t.list.field('notIn', { type: 'DateTime' })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
    t.field('not', { type: 'NestedDateTimeWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedDateTimeFilter' })
    t.field('_max', { type: 'NestedDateTimeFilter' })
  },
})

export const StringWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('mode', { type: 'QueryMode' })
    t.field('not', { type: 'NestedStringWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedStringFilter' })
    t.field('_max', { type: 'NestedStringFilter' })
  },
})

export const StringNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('mode', { type: 'QueryMode' })
    t.field('not', { type: 'NestedStringNullableWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntNullableFilter' })
    t.field('_min', { type: 'NestedStringNullableFilter' })
    t.field('_max', { type: 'NestedStringNullableFilter' })
  },
})

export const IntNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'IntNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntNullableWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntNullableFilter' })
    t.field('_avg', { type: 'NestedFloatNullableFilter' })
    t.field('_sum', { type: 'NestedIntNullableFilter' })
    t.field('_min', { type: 'NestedIntNullableFilter' })
    t.field('_max', { type: 'NestedIntNullableFilter' })
  },
})

export const BoolFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'BoolFilter',
  definition(t) {
    t.field('equals', { type: 'Boolean' })
    t.field('not', { type: 'NestedBoolFilter' })
  },
})

export const UserRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserRelationFilter',
  definition(t) {
    t.field('is', { type: 'UserWhereInput' })
    t.field('isNot', { type: 'UserWhereInput' })
  },
})

export const PostCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('published', { type: 'SortOrder' })
    t.field('title', { type: 'SortOrder' })
    t.field('authorId', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const PostAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('authorId', { type: 'SortOrder' })
  },
})

export const PostMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('published', { type: 'SortOrder' })
    t.field('title', { type: 'SortOrder' })
    t.field('authorId', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const PostMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('published', { type: 'SortOrder' })
    t.field('title', { type: 'SortOrder' })
    t.field('authorId', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const PostSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('authorId', { type: 'SortOrder' })
  },
})

export const BoolWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'BoolWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Boolean' })
    t.field('not', { type: 'NestedBoolWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedBoolFilter' })
    t.field('_max', { type: 'NestedBoolFilter' })
  },
})

export const PostRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostRelationFilter',
  definition(t) {
    t.field('is', { type: 'PostWhereInput' })
    t.field('isNot', { type: 'PostWhereInput' })
  },
})

export const CommentCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('contain', { type: 'SortOrder' })
    t.field('postId', { type: 'SortOrder' })
    t.field('authorId', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const CommentAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('postId', { type: 'SortOrder' })
    t.field('authorId', { type: 'SortOrder' })
  },
})

export const CommentMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('contain', { type: 'SortOrder' })
    t.field('postId', { type: 'SortOrder' })
    t.field('authorId', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const CommentMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('contain', { type: 'SortOrder' })
    t.field('postId', { type: 'SortOrder' })
    t.field('authorId', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const CommentSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('postId', { type: 'SortOrder' })
    t.field('authorId', { type: 'SortOrder' })
  },
})

export const UserListRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserListRelationFilter',
  definition(t) {
    t.field('every', { type: 'UserWhereInput' })
    t.field('some', { type: 'UserWhereInput' })
    t.field('none', { type: 'UserWhereInput' })
  },
})

export const UserOrderByRelationAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserOrderByRelationAggregateInput',
  definition(t) {
    t.field('_count', { type: 'SortOrder' })
  },
})

export const GroupCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'GroupCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const GroupAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'GroupAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
  },
})

export const GroupMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'GroupMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const GroupMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'GroupMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const GroupSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'GroupSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
  },
})

export const IntNullableListFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'IntNullableListFilter',
  definition(t) {
    t.list.field('equals', { type: 'Int' })
    t.field('has', { type: 'Int' })
    t.list.field('hasEvery', { type: 'Int' })
    t.list.field('hasSome', { type: 'Int' })
    t.field('isEmpty', { type: 'Boolean' })
  },
})

export const FloatNullableListFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FloatNullableListFilter',
  definition(t) {
    t.list.field('equals', { type: 'Float' })
    t.field('has', { type: 'Float' })
    t.list.field('hasEvery', { type: 'Float' })
    t.list.field('hasSome', { type: 'Float' })
    t.field('isEmpty', { type: 'Boolean' })
  },
})

export const StringNullableListFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringNullableListFilter',
  definition(t) {
    t.list.field('equals', { type: 'String' })
    t.field('has', { type: 'String' })
    t.list.field('hasEvery', { type: 'String' })
    t.list.field('hasSome', { type: 'String' })
    t.field('isEmpty', { type: 'Boolean' })
  },
})

export const EnumRolsNullableListFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EnumRolsNullableListFilter',
  definition(t) {
    t.list.field('equals', { type: 'Rols' })
    t.field('has', { type: 'Rols' })
    t.list.field('hasEvery', { type: 'Rols' })
    t.list.field('hasSome', { type: 'Rols' })
    t.field('isEmpty', { type: 'Boolean' })
  },
})

export const BoolNullableListFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'BoolNullableListFilter',
  definition(t) {
    t.list.field('equals', { type: 'Boolean' })
    t.field('has', { type: 'Boolean' })
    t.list.field('hasEvery', { type: 'Boolean' })
    t.list.field('hasSome', { type: 'Boolean' })
    t.field('isEmpty', { type: 'Boolean' })
  },
})

export const ListCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ListCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('integer', { type: 'SortOrder' })
    t.field('float', { type: 'SortOrder' })
    t.field('string', { type: 'SortOrder' })
    t.field('enums', { type: 'SortOrder' })
    t.field('boolean', { type: 'SortOrder' })
  },
})

export const ListAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ListAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('integer', { type: 'SortOrder' })
    t.field('float', { type: 'SortOrder' })
  },
})

export const ListMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ListMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
  },
})

export const ListMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ListMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
  },
})

export const ListSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ListSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('integer', { type: 'SortOrder' })
    t.field('float', { type: 'SortOrder' })
  },
})

export const PostCreateNestedManyWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateNestedManyWithoutAuthorInput',
  definition(t) {
    t.list.field('create', { type: 'PostCreateWithoutAuthorInput' })
    t.list.field('connectOrCreate', {
      type: 'PostCreateOrConnectWithoutAuthorInput',
    })
    t.field('createMany', { type: 'PostCreateManyAuthorInputEnvelope' })
    t.list.field('connect', { type: 'PostWhereUniqueInput' })
  },
})

export const GroupCreateNestedOneWithoutUsersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'GroupCreateNestedOneWithoutUsersInput',
  definition(t) {
    t.field('create', { type: 'GroupUncheckedCreateWithoutUsersInput' })
    t.field('connectOrCreate', {
      type: 'GroupCreateOrConnectWithoutUsersInput',
    })
    t.field('connect', { type: 'GroupWhereUniqueInput' })
  },
})

export const CommentCreateNestedManyWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentCreateNestedManyWithoutAuthorInput',
  definition(t) {
    t.list.field('create', { type: 'CommentCreateWithoutAuthorInput' })
    t.list.field('connectOrCreate', {
      type: 'CommentCreateOrConnectWithoutAuthorInput',
    })
    t.field('createMany', { type: 'CommentCreateManyAuthorInputEnvelope' })
    t.list.field('connect', { type: 'CommentWhereUniqueInput' })
  },
})

export const PostUncheckedCreateNestedManyWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedCreateNestedManyWithoutAuthorInput',
  definition(t) {
    t.list.field('create', { type: 'PostCreateWithoutAuthorInput' })
    t.list.field('connectOrCreate', {
      type: 'PostCreateOrConnectWithoutAuthorInput',
    })
    t.field('createMany', { type: 'PostCreateManyAuthorInputEnvelope' })
    t.list.field('connect', { type: 'PostWhereUniqueInput' })
  },
})

export const CommentUncheckedCreateNestedManyWithoutAuthorInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'CommentUncheckedCreateNestedManyWithoutAuthorInput',
    definition(t) {
      t.list.field('create', { type: 'CommentCreateWithoutAuthorInput' })
      t.list.field('connectOrCreate', {
        type: 'CommentCreateOrConnectWithoutAuthorInput',
      })
      t.field('createMany', { type: 'CommentCreateManyAuthorInputEnvelope' })
      t.list.field('connect', { type: 'CommentWhereUniqueInput' })
    },
  })

export const DateTimeFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DateTimeFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'DateTime' })
  },
})

export const StringFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'String' })
  },
})

export const NullableStringFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NullableStringFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'String' })
  },
})

export const PostUpdateManyWithoutAuthorNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpdateManyWithoutAuthorNestedInput',
  definition(t) {
    t.list.field('create', { type: 'PostCreateWithoutAuthorInput' })
    t.list.field('connectOrCreate', {
      type: 'PostCreateOrConnectWithoutAuthorInput',
    })
    t.list.field('upsert', {
      type: 'PostUpsertWithWhereUniqueWithoutAuthorInput',
    })
    t.field('createMany', { type: 'PostCreateManyAuthorInputEnvelope' })
    t.list.field('set', { type: 'PostWhereUniqueInput' })
    t.list.field('disconnect', { type: 'PostWhereUniqueInput' })
    t.list.field('delete', { type: 'PostWhereUniqueInput' })
    t.list.field('connect', { type: 'PostWhereUniqueInput' })
    t.list.field('update', {
      type: 'PostUpdateWithWhereUniqueWithoutAuthorInput',
    })
    t.list.field('updateMany', {
      type: 'PostUpdateManyWithWhereWithoutAuthorInput',
    })
    t.list.field('deleteMany', { type: 'PostScalarWhereInput' })
  },
})

export const GroupUpdateOneWithoutUsersNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'GroupUpdateOneWithoutUsersNestedInput',
  definition(t) {
    t.field('create', { type: 'GroupUncheckedCreateWithoutUsersInput' })
    t.field('connectOrCreate', {
      type: 'GroupCreateOrConnectWithoutUsersInput',
    })
    t.field('upsert', { type: 'GroupUpsertWithoutUsersInput' })
    t.field('disconnect', { type: 'Boolean' })
    t.field('delete', { type: 'Boolean' })
    t.field('connect', { type: 'GroupWhereUniqueInput' })
    t.field('update', { type: 'GroupUncheckedUpdateWithoutUsersInput' })
  },
})

export const CommentUpdateManyWithoutAuthorNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUpdateManyWithoutAuthorNestedInput',
  definition(t) {
    t.list.field('create', { type: 'CommentCreateWithoutAuthorInput' })
    t.list.field('connectOrCreate', {
      type: 'CommentCreateOrConnectWithoutAuthorInput',
    })
    t.list.field('upsert', {
      type: 'CommentUpsertWithWhereUniqueWithoutAuthorInput',
    })
    t.field('createMany', { type: 'CommentCreateManyAuthorInputEnvelope' })
    t.list.field('set', { type: 'CommentWhereUniqueInput' })
    t.list.field('disconnect', { type: 'CommentWhereUniqueInput' })
    t.list.field('delete', { type: 'CommentWhereUniqueInput' })
    t.list.field('connect', { type: 'CommentWhereUniqueInput' })
    t.list.field('update', {
      type: 'CommentUpdateWithWhereUniqueWithoutAuthorInput',
    })
    t.list.field('updateMany', {
      type: 'CommentUpdateManyWithWhereWithoutAuthorInput',
    })
    t.list.field('deleteMany', { type: 'CommentScalarWhereInput' })
  },
})

export const IntFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'IntFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'Int' })
    t.field('increment', { type: 'Int' })
    t.field('decrement', { type: 'Int' })
    t.field('multiply', { type: 'Int' })
    t.field('divide', { type: 'Int' })
  },
})

export const PostUncheckedUpdateManyWithoutAuthorNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedUpdateManyWithoutAuthorNestedInput',
  definition(t) {
    t.list.field('create', { type: 'PostCreateWithoutAuthorInput' })
    t.list.field('connectOrCreate', {
      type: 'PostCreateOrConnectWithoutAuthorInput',
    })
    t.list.field('upsert', {
      type: 'PostUpsertWithWhereUniqueWithoutAuthorInput',
    })
    t.field('createMany', { type: 'PostCreateManyAuthorInputEnvelope' })
    t.list.field('set', { type: 'PostWhereUniqueInput' })
    t.list.field('disconnect', { type: 'PostWhereUniqueInput' })
    t.list.field('delete', { type: 'PostWhereUniqueInput' })
    t.list.field('connect', { type: 'PostWhereUniqueInput' })
    t.list.field('update', {
      type: 'PostUpdateWithWhereUniqueWithoutAuthorInput',
    })
    t.list.field('updateMany', {
      type: 'PostUpdateManyWithWhereWithoutAuthorInput',
    })
    t.list.field('deleteMany', { type: 'PostScalarWhereInput' })
  },
})

export const NullableIntFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NullableIntFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'Int' })
    t.field('increment', { type: 'Int' })
    t.field('decrement', { type: 'Int' })
    t.field('multiply', { type: 'Int' })
    t.field('divide', { type: 'Int' })
  },
})

export const CommentUncheckedUpdateManyWithoutAuthorNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'CommentUncheckedUpdateManyWithoutAuthorNestedInput',
    definition(t) {
      t.list.field('create', { type: 'CommentCreateWithoutAuthorInput' })
      t.list.field('connectOrCreate', {
        type: 'CommentCreateOrConnectWithoutAuthorInput',
      })
      t.list.field('upsert', {
        type: 'CommentUpsertWithWhereUniqueWithoutAuthorInput',
      })
      t.field('createMany', { type: 'CommentCreateManyAuthorInputEnvelope' })
      t.list.field('set', { type: 'CommentWhereUniqueInput' })
      t.list.field('disconnect', { type: 'CommentWhereUniqueInput' })
      t.list.field('delete', { type: 'CommentWhereUniqueInput' })
      t.list.field('connect', { type: 'CommentWhereUniqueInput' })
      t.list.field('update', {
        type: 'CommentUpdateWithWhereUniqueWithoutAuthorInput',
      })
      t.list.field('updateMany', {
        type: 'CommentUpdateManyWithWhereWithoutAuthorInput',
      })
      t.list.field('deleteMany', { type: 'CommentScalarWhereInput' })
    },
  })

export const UserCreateNestedOneWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateNestedOneWithoutPostsInput',
  definition(t) {
    t.field('create', { type: 'UserUncheckedCreateWithoutPostsInput' })
    t.field('connectOrCreate', { type: 'UserCreateOrConnectWithoutPostsInput' })
    t.field('connect', { type: 'UserWhereUniqueInput' })
  },
})

export const CommentCreateNestedManyWithoutPostInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentCreateNestedManyWithoutPostInput',
  definition(t) {
    t.list.field('create', { type: 'CommentCreateWithoutPostInput' })
    t.list.field('connectOrCreate', {
      type: 'CommentCreateOrConnectWithoutPostInput',
    })
    t.field('createMany', { type: 'CommentCreateManyPostInputEnvelope' })
    t.list.field('connect', { type: 'CommentWhereUniqueInput' })
  },
})

export const CommentUncheckedCreateNestedManyWithoutPostInput = inputObjectType(
  {
    nonNullDefaults: {
      input: false,
    },
    name: 'CommentUncheckedCreateNestedManyWithoutPostInput',
    definition(t) {
      t.list.field('create', { type: 'CommentCreateWithoutPostInput' })
      t.list.field('connectOrCreate', {
        type: 'CommentCreateOrConnectWithoutPostInput',
      })
      t.field('createMany', { type: 'CommentCreateManyPostInputEnvelope' })
      t.list.field('connect', { type: 'CommentWhereUniqueInput' })
    },
  },
)

export const BoolFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'BoolFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'Boolean' })
  },
})

export const UserUpdateOneWithoutPostsNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateOneWithoutPostsNestedInput',
  definition(t) {
    t.field('create', { type: 'UserUncheckedCreateWithoutPostsInput' })
    t.field('connectOrCreate', { type: 'UserCreateOrConnectWithoutPostsInput' })
    t.field('upsert', { type: 'UserUpsertWithoutPostsInput' })
    t.field('disconnect', { type: 'Boolean' })
    t.field('delete', { type: 'Boolean' })
    t.field('connect', { type: 'UserWhereUniqueInput' })
    t.field('update', { type: 'UserUncheckedUpdateWithoutPostsInput' })
  },
})

export const CommentUpdateManyWithoutPostNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUpdateManyWithoutPostNestedInput',
  definition(t) {
    t.list.field('create', { type: 'CommentCreateWithoutPostInput' })
    t.list.field('connectOrCreate', {
      type: 'CommentCreateOrConnectWithoutPostInput',
    })
    t.list.field('upsert', {
      type: 'CommentUpsertWithWhereUniqueWithoutPostInput',
    })
    t.field('createMany', { type: 'CommentCreateManyPostInputEnvelope' })
    t.list.field('set', { type: 'CommentWhereUniqueInput' })
    t.list.field('disconnect', { type: 'CommentWhereUniqueInput' })
    t.list.field('delete', { type: 'CommentWhereUniqueInput' })
    t.list.field('connect', { type: 'CommentWhereUniqueInput' })
    t.list.field('update', {
      type: 'CommentUpdateWithWhereUniqueWithoutPostInput',
    })
    t.list.field('updateMany', {
      type: 'CommentUpdateManyWithWhereWithoutPostInput',
    })
    t.list.field('deleteMany', { type: 'CommentScalarWhereInput' })
  },
})

export const CommentUncheckedUpdateManyWithoutPostNestedInput = inputObjectType(
  {
    nonNullDefaults: {
      input: false,
    },
    name: 'CommentUncheckedUpdateManyWithoutPostNestedInput',
    definition(t) {
      t.list.field('create', { type: 'CommentCreateWithoutPostInput' })
      t.list.field('connectOrCreate', {
        type: 'CommentCreateOrConnectWithoutPostInput',
      })
      t.list.field('upsert', {
        type: 'CommentUpsertWithWhereUniqueWithoutPostInput',
      })
      t.field('createMany', { type: 'CommentCreateManyPostInputEnvelope' })
      t.list.field('set', { type: 'CommentWhereUniqueInput' })
      t.list.field('disconnect', { type: 'CommentWhereUniqueInput' })
      t.list.field('delete', { type: 'CommentWhereUniqueInput' })
      t.list.field('connect', { type: 'CommentWhereUniqueInput' })
      t.list.field('update', {
        type: 'CommentUpdateWithWhereUniqueWithoutPostInput',
      })
      t.list.field('updateMany', {
        type: 'CommentUpdateManyWithWhereWithoutPostInput',
      })
      t.list.field('deleteMany', { type: 'CommentScalarWhereInput' })
    },
  },
)

export const PostCreateNestedOneWithoutCommentsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateNestedOneWithoutCommentsInput',
  definition(t) {
    t.field('create', { type: 'PostUncheckedCreateWithoutCommentsInput' })
    t.field('connectOrCreate', {
      type: 'PostCreateOrConnectWithoutCommentsInput',
    })
    t.field('connect', { type: 'PostWhereUniqueInput' })
  },
})

export const UserCreateNestedOneWithoutCommentsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateNestedOneWithoutCommentsInput',
  definition(t) {
    t.field('create', { type: 'UserUncheckedCreateWithoutCommentsInput' })
    t.field('connectOrCreate', {
      type: 'UserCreateOrConnectWithoutCommentsInput',
    })
    t.field('connect', { type: 'UserWhereUniqueInput' })
  },
})

export const PostUpdateOneRequiredWithoutCommentsNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpdateOneRequiredWithoutCommentsNestedInput',
  definition(t) {
    t.field('create', { type: 'PostUncheckedCreateWithoutCommentsInput' })
    t.field('connectOrCreate', {
      type: 'PostCreateOrConnectWithoutCommentsInput',
    })
    t.field('upsert', { type: 'PostUpsertWithoutCommentsInput' })
    t.field('connect', { type: 'PostWhereUniqueInput' })
    t.field('update', { type: 'PostUncheckedUpdateWithoutCommentsInput' })
  },
})

export const UserUpdateOneWithoutCommentsNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateOneWithoutCommentsNestedInput',
  definition(t) {
    t.field('create', { type: 'UserUncheckedCreateWithoutCommentsInput' })
    t.field('connectOrCreate', {
      type: 'UserCreateOrConnectWithoutCommentsInput',
    })
    t.field('upsert', { type: 'UserUpsertWithoutCommentsInput' })
    t.field('disconnect', { type: 'Boolean' })
    t.field('delete', { type: 'Boolean' })
    t.field('connect', { type: 'UserWhereUniqueInput' })
    t.field('update', { type: 'UserUncheckedUpdateWithoutCommentsInput' })
  },
})

export const UserCreateNestedManyWithoutGroupInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateNestedManyWithoutGroupInput',
  definition(t) {
    t.list.field('create', { type: 'UserCreateWithoutGroupInput' })
    t.list.field('connectOrCreate', {
      type: 'UserCreateOrConnectWithoutGroupInput',
    })
    t.field('createMany', { type: 'UserCreateManyGroupInputEnvelope' })
    t.list.field('connect', { type: 'UserWhereUniqueInput' })
  },
})

export const UserUncheckedCreateNestedManyWithoutGroupInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedCreateNestedManyWithoutGroupInput',
  definition(t) {
    t.list.field('create', { type: 'UserCreateWithoutGroupInput' })
    t.list.field('connectOrCreate', {
      type: 'UserCreateOrConnectWithoutGroupInput',
    })
    t.field('createMany', { type: 'UserCreateManyGroupInputEnvelope' })
    t.list.field('connect', { type: 'UserWhereUniqueInput' })
  },
})

export const UserUpdateManyWithoutGroupNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateManyWithoutGroupNestedInput',
  definition(t) {
    t.list.field('create', { type: 'UserCreateWithoutGroupInput' })
    t.list.field('connectOrCreate', {
      type: 'UserCreateOrConnectWithoutGroupInput',
    })
    t.list.field('upsert', {
      type: 'UserUpsertWithWhereUniqueWithoutGroupInput',
    })
    t.field('createMany', { type: 'UserCreateManyGroupInputEnvelope' })
    t.list.field('set', { type: 'UserWhereUniqueInput' })
    t.list.field('disconnect', { type: 'UserWhereUniqueInput' })
    t.list.field('delete', { type: 'UserWhereUniqueInput' })
    t.list.field('connect', { type: 'UserWhereUniqueInput' })
    t.list.field('update', {
      type: 'UserUpdateWithWhereUniqueWithoutGroupInput',
    })
    t.list.field('updateMany', {
      type: 'UserUpdateManyWithWhereWithoutGroupInput',
    })
    t.list.field('deleteMany', { type: 'UserScalarWhereInput' })
  },
})

export const UserUncheckedUpdateManyWithoutGroupNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateManyWithoutGroupNestedInput',
  definition(t) {
    t.list.field('create', { type: 'UserCreateWithoutGroupInput' })
    t.list.field('connectOrCreate', {
      type: 'UserCreateOrConnectWithoutGroupInput',
    })
    t.list.field('upsert', {
      type: 'UserUpsertWithWhereUniqueWithoutGroupInput',
    })
    t.field('createMany', { type: 'UserCreateManyGroupInputEnvelope' })
    t.list.field('set', { type: 'UserWhereUniqueInput' })
    t.list.field('disconnect', { type: 'UserWhereUniqueInput' })
    t.list.field('delete', { type: 'UserWhereUniqueInput' })
    t.list.field('connect', { type: 'UserWhereUniqueInput' })
    t.list.field('update', {
      type: 'UserUpdateWithWhereUniqueWithoutGroupInput',
    })
    t.list.field('updateMany', {
      type: 'UserUpdateManyWithWhereWithoutGroupInput',
    })
    t.list.field('deleteMany', { type: 'UserScalarWhereInput' })
  },
})

export const ListCreateintegerInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ListCreateintegerInput',
  definition(t) {
    t.nonNull.field('set', { type: 'Int' })
  },
})

export const ListCreatefloatInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ListCreatefloatInput',
  definition(t) {
    t.nonNull.field('set', { type: 'Float' })
  },
})

export const ListCreatestringInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ListCreatestringInput',
  definition(t) {
    t.nonNull.field('set', { type: 'String' })
  },
})

export const ListCreateenumsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ListCreateenumsInput',
  definition(t) {
    t.nonNull.field('set', { type: 'Rols' })
  },
})

export const ListCreatebooleanInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ListCreatebooleanInput',
  definition(t) {
    t.nonNull.field('set', { type: 'Boolean' })
  },
})

export const ListUpdateintegerInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ListUpdateintegerInput',
  definition(t) {
    t.list.field('set', { type: 'Int' })
    t.list.field('push', { type: 'Int' })
  },
})

export const ListUpdatefloatInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ListUpdatefloatInput',
  definition(t) {
    t.list.field('set', { type: 'Float' })
    t.list.field('push', { type: 'Float' })
  },
})

export const ListUpdatestringInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ListUpdatestringInput',
  definition(t) {
    t.list.field('set', { type: 'String' })
    t.list.field('push', { type: 'String' })
  },
})

export const ListUpdateenumsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ListUpdateenumsInput',
  definition(t) {
    t.list.field('set', { type: 'Rols' })
    t.list.field('push', { type: 'Rols' })
  },
})

export const ListUpdatebooleanInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ListUpdatebooleanInput',
  definition(t) {
    t.list.field('set', { type: 'Boolean' })
    t.list.field('push', { type: 'Boolean' })
  },
})

export const NestedIntFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedIntFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntFilter' })
  },
})

export const NestedDateTimeFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedDateTimeFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.list.field('in', { type: 'DateTime' })
    t.list.field('notIn', { type: 'DateTime' })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
    t.field('not', { type: 'NestedDateTimeFilter' })
  },
})

export const NestedStringFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedStringFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('not', { type: 'NestedStringFilter' })
  },
})

export const NestedStringNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedStringNullableFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('not', { type: 'NestedStringNullableFilter' })
  },
})

export const NestedIntNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedIntNullableFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntNullableFilter' })
  },
})

export const NestedIntWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedIntWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_avg', { type: 'NestedFloatFilter' })
    t.field('_sum', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedIntFilter' })
    t.field('_max', { type: 'NestedIntFilter' })
  },
})

export const NestedFloatFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedFloatFilter',
  definition(t) {
    t.field('equals', { type: 'Float' })
    t.list.field('in', { type: 'Float' })
    t.list.field('notIn', { type: 'Float' })
    t.field('lt', { type: 'Float' })
    t.field('lte', { type: 'Float' })
    t.field('gt', { type: 'Float' })
    t.field('gte', { type: 'Float' })
    t.field('not', { type: 'NestedFloatFilter' })
  },
})

export const NestedDateTimeWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedDateTimeWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.list.field('in', { type: 'DateTime' })
    t.list.field('notIn', { type: 'DateTime' })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
    t.field('not', { type: 'NestedDateTimeWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedDateTimeFilter' })
    t.field('_max', { type: 'NestedDateTimeFilter' })
  },
})

export const NestedStringWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedStringWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('not', { type: 'NestedStringWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedStringFilter' })
    t.field('_max', { type: 'NestedStringFilter' })
  },
})

export const NestedStringNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedStringNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('not', { type: 'NestedStringNullableWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntNullableFilter' })
    t.field('_min', { type: 'NestedStringNullableFilter' })
    t.field('_max', { type: 'NestedStringNullableFilter' })
  },
})

export const NestedIntNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedIntNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntNullableWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntNullableFilter' })
    t.field('_avg', { type: 'NestedFloatNullableFilter' })
    t.field('_sum', { type: 'NestedIntNullableFilter' })
    t.field('_min', { type: 'NestedIntNullableFilter' })
    t.field('_max', { type: 'NestedIntNullableFilter' })
  },
})

export const NestedFloatNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedFloatNullableFilter',
  definition(t) {
    t.field('equals', { type: 'Float' })
    t.list.field('in', { type: 'Float' })
    t.list.field('notIn', { type: 'Float' })
    t.field('lt', { type: 'Float' })
    t.field('lte', { type: 'Float' })
    t.field('gt', { type: 'Float' })
    t.field('gte', { type: 'Float' })
    t.field('not', { type: 'NestedFloatNullableFilter' })
  },
})

export const NestedBoolFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedBoolFilter',
  definition(t) {
    t.field('equals', { type: 'Boolean' })
    t.field('not', { type: 'NestedBoolFilter' })
  },
})

export const NestedBoolWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedBoolWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Boolean' })
    t.field('not', { type: 'NestedBoolWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedBoolFilter' })
    t.field('_max', { type: 'NestedBoolFilter' })
  },
})

export const PostCreateWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateWithoutAuthorInput',
  definition(t) {
    t.field('published', { type: 'Boolean' })
    t.nonNull.field('title', { type: 'String' })
    t.field('comments', { type: 'CommentCreateNestedManyWithoutPostInput' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const PostUncheckedCreateWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedCreateWithoutAuthorInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('published', { type: 'Boolean' })
    t.nonNull.field('title', { type: 'String' })
    t.field('comments', {
      type: 'CommentUncheckedCreateNestedManyWithoutPostInput',
    })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const PostCreateOrConnectWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateOrConnectWithoutAuthorInput',
  definition(t) {
    t.nonNull.field('where', { type: 'PostWhereUniqueInput' })
    t.nonNull.field('create', { type: 'PostUncheckedCreateWithoutAuthorInput' })
  },
})

export const PostCreateManyAuthorInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateManyAuthorInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'PostCreateManyAuthorInput' })
    t.field('skipDuplicates', { type: 'Boolean' })
  },
})

export const GroupCreateWithoutUsersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'GroupCreateWithoutUsersInput',
  definition(t) {
    t.nonNull.field('name', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const GroupUncheckedCreateWithoutUsersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'GroupUncheckedCreateWithoutUsersInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('name', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const GroupCreateOrConnectWithoutUsersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'GroupCreateOrConnectWithoutUsersInput',
  definition(t) {
    t.nonNull.field('where', { type: 'GroupWhereUniqueInput' })
    t.nonNull.field('create', { type: 'GroupUncheckedCreateWithoutUsersInput' })
  },
})

export const CommentCreateWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentCreateWithoutAuthorInput',
  definition(t) {
    t.nonNull.field('contain', { type: 'String' })
    t.nonNull.field('post', { type: 'PostCreateNestedOneWithoutCommentsInput' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const CommentUncheckedCreateWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUncheckedCreateWithoutAuthorInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('contain', { type: 'String' })
    t.nonNull.field('postId', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const CommentCreateOrConnectWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentCreateOrConnectWithoutAuthorInput',
  definition(t) {
    t.nonNull.field('where', { type: 'CommentWhereUniqueInput' })
    t.nonNull.field('create', {
      type: 'CommentUncheckedCreateWithoutAuthorInput',
    })
  },
})

export const CommentCreateManyAuthorInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentCreateManyAuthorInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'CommentCreateManyAuthorInput' })
    t.field('skipDuplicates', { type: 'Boolean' })
  },
})

export const PostUpsertWithWhereUniqueWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpsertWithWhereUniqueWithoutAuthorInput',
  definition(t) {
    t.nonNull.field('where', { type: 'PostWhereUniqueInput' })
    t.nonNull.field('update', { type: 'PostUncheckedUpdateWithoutAuthorInput' })
    t.nonNull.field('create', { type: 'PostUncheckedCreateWithoutAuthorInput' })
  },
})

export const PostUpdateWithWhereUniqueWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpdateWithWhereUniqueWithoutAuthorInput',
  definition(t) {
    t.nonNull.field('where', { type: 'PostWhereUniqueInput' })
    t.nonNull.field('data', { type: 'PostUncheckedUpdateWithoutAuthorInput' })
  },
})

export const PostUpdateManyWithWhereWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpdateManyWithWhereWithoutAuthorInput',
  definition(t) {
    t.nonNull.field('where', { type: 'PostScalarWhereInput' })
    t.nonNull.field('data', {
      type: 'PostUncheckedUpdateManyWithoutPostsInput',
    })
  },
})

export const PostScalarWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostScalarWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'PostScalarWhereInput' })
    t.list.field('OR', { type: 'PostScalarWhereInput' })
    t.list.field('NOT', { type: 'PostScalarWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('published', { type: 'BoolFilter' })
    t.field('title', { type: 'StringFilter' })
    t.field('authorId', { type: 'IntNullableFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('updatedAt', { type: 'DateTimeFilter' })
  },
})

export const GroupUpsertWithoutUsersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'GroupUpsertWithoutUsersInput',
  definition(t) {
    t.nonNull.field('update', { type: 'GroupUncheckedUpdateWithoutUsersInput' })
    t.nonNull.field('create', { type: 'GroupUncheckedCreateWithoutUsersInput' })
  },
})

export const GroupUpdateWithoutUsersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'GroupUpdateWithoutUsersInput',
  definition(t) {
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const GroupUncheckedUpdateWithoutUsersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'GroupUncheckedUpdateWithoutUsersInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const CommentUpsertWithWhereUniqueWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUpsertWithWhereUniqueWithoutAuthorInput',
  definition(t) {
    t.nonNull.field('where', { type: 'CommentWhereUniqueInput' })
    t.nonNull.field('update', {
      type: 'CommentUncheckedUpdateWithoutAuthorInput',
    })
    t.nonNull.field('create', {
      type: 'CommentUncheckedCreateWithoutAuthorInput',
    })
  },
})

export const CommentUpdateWithWhereUniqueWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUpdateWithWhereUniqueWithoutAuthorInput',
  definition(t) {
    t.nonNull.field('where', { type: 'CommentWhereUniqueInput' })
    t.nonNull.field('data', {
      type: 'CommentUncheckedUpdateWithoutAuthorInput',
    })
  },
})

export const CommentUpdateManyWithWhereWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUpdateManyWithWhereWithoutAuthorInput',
  definition(t) {
    t.nonNull.field('where', { type: 'CommentScalarWhereInput' })
    t.nonNull.field('data', {
      type: 'CommentUncheckedUpdateManyWithoutCommentsInput',
    })
  },
})

export const CommentScalarWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentScalarWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'CommentScalarWhereInput' })
    t.list.field('OR', { type: 'CommentScalarWhereInput' })
    t.list.field('NOT', { type: 'CommentScalarWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('contain', { type: 'StringFilter' })
    t.field('postId', { type: 'IntFilter' })
    t.field('authorId', { type: 'IntNullableFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('updatedAt', { type: 'DateTimeFilter' })
  },
})

export const UserCreateWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateWithoutPostsInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('email', { type: 'String' })
    t.field('name', { type: 'String' })
    t.nonNull.field('password', { type: 'String' })
    t.field('group', { type: 'GroupCreateNestedOneWithoutUsersInput' })
    t.field('comments', { type: 'CommentCreateNestedManyWithoutAuthorInput' })
  },
})

export const UserUncheckedCreateWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedCreateWithoutPostsInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('email', { type: 'String' })
    t.field('name', { type: 'String' })
    t.nonNull.field('password', { type: 'String' })
    t.field('groupId', { type: 'Int' })
    t.field('comments', {
      type: 'CommentUncheckedCreateNestedManyWithoutAuthorInput',
    })
  },
})

export const UserCreateOrConnectWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateOrConnectWithoutPostsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserWhereUniqueInput' })
    t.nonNull.field('create', { type: 'UserUncheckedCreateWithoutPostsInput' })
  },
})

export const CommentCreateWithoutPostInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentCreateWithoutPostInput',
  definition(t) {
    t.nonNull.field('contain', { type: 'String' })
    t.field('author', { type: 'UserCreateNestedOneWithoutCommentsInput' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const CommentUncheckedCreateWithoutPostInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUncheckedCreateWithoutPostInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('contain', { type: 'String' })
    t.field('authorId', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const CommentCreateOrConnectWithoutPostInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentCreateOrConnectWithoutPostInput',
  definition(t) {
    t.nonNull.field('where', { type: 'CommentWhereUniqueInput' })
    t.nonNull.field('create', {
      type: 'CommentUncheckedCreateWithoutPostInput',
    })
  },
})

export const CommentCreateManyPostInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentCreateManyPostInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'CommentCreateManyPostInput' })
    t.field('skipDuplicates', { type: 'Boolean' })
  },
})

export const UserUpsertWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpsertWithoutPostsInput',
  definition(t) {
    t.nonNull.field('update', { type: 'UserUncheckedUpdateWithoutPostsInput' })
    t.nonNull.field('create', { type: 'UserUncheckedCreateWithoutPostsInput' })
  },
})

export const UserUpdateWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateWithoutPostsInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('group', { type: 'GroupUpdateOneWithoutUsersNestedInput' })
    t.field('comments', { type: 'CommentUpdateManyWithoutAuthorNestedInput' })
  },
})

export const UserUncheckedUpdateWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateWithoutPostsInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('groupId', { type: 'NullableIntFieldUpdateOperationsInput' })
    t.field('comments', {
      type: 'CommentUncheckedUpdateManyWithoutAuthorNestedInput',
    })
  },
})

export const CommentUpsertWithWhereUniqueWithoutPostInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUpsertWithWhereUniqueWithoutPostInput',
  definition(t) {
    t.nonNull.field('where', { type: 'CommentWhereUniqueInput' })
    t.nonNull.field('update', {
      type: 'CommentUncheckedUpdateWithoutPostInput',
    })
    t.nonNull.field('create', {
      type: 'CommentUncheckedCreateWithoutPostInput',
    })
  },
})

export const CommentUpdateWithWhereUniqueWithoutPostInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUpdateWithWhereUniqueWithoutPostInput',
  definition(t) {
    t.nonNull.field('where', { type: 'CommentWhereUniqueInput' })
    t.nonNull.field('data', { type: 'CommentUncheckedUpdateWithoutPostInput' })
  },
})

export const CommentUpdateManyWithWhereWithoutPostInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUpdateManyWithWhereWithoutPostInput',
  definition(t) {
    t.nonNull.field('where', { type: 'CommentScalarWhereInput' })
    t.nonNull.field('data', {
      type: 'CommentUncheckedUpdateManyWithoutCommentsInput',
    })
  },
})

export const PostCreateWithoutCommentsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateWithoutCommentsInput',
  definition(t) {
    t.field('published', { type: 'Boolean' })
    t.nonNull.field('title', { type: 'String' })
    t.field('author', { type: 'UserCreateNestedOneWithoutPostsInput' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const PostUncheckedCreateWithoutCommentsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedCreateWithoutCommentsInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('published', { type: 'Boolean' })
    t.nonNull.field('title', { type: 'String' })
    t.field('authorId', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const PostCreateOrConnectWithoutCommentsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateOrConnectWithoutCommentsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'PostWhereUniqueInput' })
    t.nonNull.field('create', {
      type: 'PostUncheckedCreateWithoutCommentsInput',
    })
  },
})

export const UserCreateWithoutCommentsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateWithoutCommentsInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('email', { type: 'String' })
    t.field('name', { type: 'String' })
    t.nonNull.field('password', { type: 'String' })
    t.field('posts', { type: 'PostCreateNestedManyWithoutAuthorInput' })
    t.field('group', { type: 'GroupCreateNestedOneWithoutUsersInput' })
  },
})

export const UserUncheckedCreateWithoutCommentsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedCreateWithoutCommentsInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('email', { type: 'String' })
    t.field('name', { type: 'String' })
    t.nonNull.field('password', { type: 'String' })
    t.field('posts', {
      type: 'PostUncheckedCreateNestedManyWithoutAuthorInput',
    })
    t.field('groupId', { type: 'Int' })
  },
})

export const UserCreateOrConnectWithoutCommentsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateOrConnectWithoutCommentsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserWhereUniqueInput' })
    t.nonNull.field('create', {
      type: 'UserUncheckedCreateWithoutCommentsInput',
    })
  },
})

export const PostUpsertWithoutCommentsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpsertWithoutCommentsInput',
  definition(t) {
    t.nonNull.field('update', {
      type: 'PostUncheckedUpdateWithoutCommentsInput',
    })
    t.nonNull.field('create', {
      type: 'PostUncheckedCreateWithoutCommentsInput',
    })
  },
})

export const PostUpdateWithoutCommentsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpdateWithoutCommentsInput',
  definition(t) {
    t.field('published', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('author', { type: 'UserUpdateOneWithoutPostsNestedInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const PostUncheckedUpdateWithoutCommentsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedUpdateWithoutCommentsInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('published', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('authorId', { type: 'NullableIntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const UserUpsertWithoutCommentsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpsertWithoutCommentsInput',
  definition(t) {
    t.nonNull.field('update', {
      type: 'UserUncheckedUpdateWithoutCommentsInput',
    })
    t.nonNull.field('create', {
      type: 'UserUncheckedCreateWithoutCommentsInput',
    })
  },
})

export const UserUpdateWithoutCommentsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateWithoutCommentsInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('posts', { type: 'PostUpdateManyWithoutAuthorNestedInput' })
    t.field('group', { type: 'GroupUpdateOneWithoutUsersNestedInput' })
  },
})

export const UserUncheckedUpdateWithoutCommentsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateWithoutCommentsInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('posts', {
      type: 'PostUncheckedUpdateManyWithoutAuthorNestedInput',
    })
    t.field('groupId', { type: 'NullableIntFieldUpdateOperationsInput' })
  },
})

export const UserCreateWithoutGroupInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateWithoutGroupInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('email', { type: 'String' })
    t.field('name', { type: 'String' })
    t.nonNull.field('password', { type: 'String' })
    t.field('posts', { type: 'PostCreateNestedManyWithoutAuthorInput' })
    t.field('comments', { type: 'CommentCreateNestedManyWithoutAuthorInput' })
  },
})

export const UserUncheckedCreateWithoutGroupInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedCreateWithoutGroupInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('email', { type: 'String' })
    t.field('name', { type: 'String' })
    t.nonNull.field('password', { type: 'String' })
    t.field('posts', {
      type: 'PostUncheckedCreateNestedManyWithoutAuthorInput',
    })
    t.field('comments', {
      type: 'CommentUncheckedCreateNestedManyWithoutAuthorInput',
    })
  },
})

export const UserCreateOrConnectWithoutGroupInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateOrConnectWithoutGroupInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserWhereUniqueInput' })
    t.nonNull.field('create', { type: 'UserUncheckedCreateWithoutGroupInput' })
  },
})

export const UserCreateManyGroupInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateManyGroupInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'UserCreateManyGroupInput' })
    t.field('skipDuplicates', { type: 'Boolean' })
  },
})

export const UserUpsertWithWhereUniqueWithoutGroupInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpsertWithWhereUniqueWithoutGroupInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserWhereUniqueInput' })
    t.nonNull.field('update', { type: 'UserUncheckedUpdateWithoutGroupInput' })
    t.nonNull.field('create', { type: 'UserUncheckedCreateWithoutGroupInput' })
  },
})

export const UserUpdateWithWhereUniqueWithoutGroupInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateWithWhereUniqueWithoutGroupInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserWhereUniqueInput' })
    t.nonNull.field('data', { type: 'UserUncheckedUpdateWithoutGroupInput' })
  },
})

export const UserUpdateManyWithWhereWithoutGroupInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateManyWithWhereWithoutGroupInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserScalarWhereInput' })
    t.nonNull.field('data', {
      type: 'UserUncheckedUpdateManyWithoutUsersInput',
    })
  },
})

export const UserScalarWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserScalarWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'UserScalarWhereInput' })
    t.list.field('OR', { type: 'UserScalarWhereInput' })
    t.list.field('NOT', { type: 'UserScalarWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('email', { type: 'StringFilter' })
    t.field('name', { type: 'StringNullableFilter' })
    t.field('password', { type: 'StringFilter' })
    t.field('groupId', { type: 'IntNullableFilter' })
  },
})

export const PostCreateManyAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateManyAuthorInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('published', { type: 'Boolean' })
    t.nonNull.field('title', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const CommentCreateManyAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentCreateManyAuthorInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('contain', { type: 'String' })
    t.nonNull.field('postId', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const PostUpdateWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpdateWithoutAuthorInput',
  definition(t) {
    t.field('published', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('comments', { type: 'CommentUpdateManyWithoutPostNestedInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const PostUncheckedUpdateWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedUpdateWithoutAuthorInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('published', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('comments', {
      type: 'CommentUncheckedUpdateManyWithoutPostNestedInput',
    })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const PostUncheckedUpdateManyWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedUpdateManyWithoutPostsInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('published', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const CommentUpdateWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUpdateWithoutAuthorInput',
  definition(t) {
    t.field('contain', { type: 'StringFieldUpdateOperationsInput' })
    t.field('post', { type: 'PostUpdateOneRequiredWithoutCommentsNestedInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const CommentUncheckedUpdateWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUncheckedUpdateWithoutAuthorInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('contain', { type: 'StringFieldUpdateOperationsInput' })
    t.field('postId', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const CommentUncheckedUpdateManyWithoutCommentsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUncheckedUpdateManyWithoutCommentsInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('contain', { type: 'StringFieldUpdateOperationsInput' })
    t.field('postId', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const CommentCreateManyPostInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentCreateManyPostInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('contain', { type: 'String' })
    t.field('authorId', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const CommentUpdateWithoutPostInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUpdateWithoutPostInput',
  definition(t) {
    t.field('contain', { type: 'StringFieldUpdateOperationsInput' })
    t.field('author', { type: 'UserUpdateOneWithoutCommentsNestedInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const CommentUncheckedUpdateWithoutPostInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CommentUncheckedUpdateWithoutPostInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('contain', { type: 'StringFieldUpdateOperationsInput' })
    t.field('authorId', { type: 'NullableIntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const UserCreateManyGroupInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateManyGroupInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('email', { type: 'String' })
    t.field('name', { type: 'String' })
    t.nonNull.field('password', { type: 'String' })
  },
})

export const UserUpdateWithoutGroupInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateWithoutGroupInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('posts', { type: 'PostUpdateManyWithoutAuthorNestedInput' })
    t.field('comments', { type: 'CommentUpdateManyWithoutAuthorNestedInput' })
  },
})

export const UserUncheckedUpdateWithoutGroupInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateWithoutGroupInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('posts', {
      type: 'PostUncheckedUpdateManyWithoutAuthorNestedInput',
    })
    t.field('comments', {
      type: 'CommentUncheckedUpdateManyWithoutAuthorNestedInput',
    })
  },
})

export const UserUncheckedUpdateManyWithoutUsersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateManyWithoutUsersInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('name', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
  },
})

export const AggregateUser = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateUser',
  definition(t) {
    t.nullable.field('_count', { type: 'UserCountAggregateOutputType' })
    t.nullable.field('_avg', { type: 'UserAvgAggregateOutputType' })
    t.nullable.field('_sum', { type: 'UserSumAggregateOutputType' })
    t.nullable.field('_min', { type: 'UserMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'UserMaxAggregateOutputType' })
  },
})

export const AggregatePost = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregatePost',
  definition(t) {
    t.nullable.field('_count', { type: 'PostCountAggregateOutputType' })
    t.nullable.field('_avg', { type: 'PostAvgAggregateOutputType' })
    t.nullable.field('_sum', { type: 'PostSumAggregateOutputType' })
    t.nullable.field('_min', { type: 'PostMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'PostMaxAggregateOutputType' })
  },
})

export const AggregateComment = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateComment',
  definition(t) {
    t.nullable.field('_count', { type: 'CommentCountAggregateOutputType' })
    t.nullable.field('_avg', { type: 'CommentAvgAggregateOutputType' })
    t.nullable.field('_sum', { type: 'CommentSumAggregateOutputType' })
    t.nullable.field('_min', { type: 'CommentMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'CommentMaxAggregateOutputType' })
  },
})

export const AggregateGroup = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateGroup',
  definition(t) {
    t.nullable.field('_count', { type: 'GroupCountAggregateOutputType' })
    t.nullable.field('_avg', { type: 'GroupAvgAggregateOutputType' })
    t.nullable.field('_sum', { type: 'GroupSumAggregateOutputType' })
    t.nullable.field('_min', { type: 'GroupMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'GroupMaxAggregateOutputType' })
  },
})

export const AggregateList = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateList',
  definition(t) {
    t.nullable.field('_count', { type: 'ListCountAggregateOutputType' })
    t.nullable.field('_avg', { type: 'ListAvgAggregateOutputType' })
    t.nullable.field('_sum', { type: 'ListSumAggregateOutputType' })
    t.nullable.field('_min', { type: 'ListMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'ListMaxAggregateOutputType' })
  },
})

export const UserCountOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserCountOutputType',
  definition(t) {
    t.field('posts', { type: 'Int' })
    t.field('comments', { type: 'Int' })
  },
})

export const UserCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'Int' })
    t.field('email', { type: 'Int' })
    t.field('name', { type: 'Int' })
    t.field('password', { type: 'Int' })
    t.field('groupId', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const UserAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' })
    t.nullable.field('groupId', { type: 'Float' })
  },
})

export const UserSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('groupId', { type: 'Int' })
  },
})

export const UserMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('email', { type: 'String' })
    t.nullable.field('name', { type: 'String' })
    t.nullable.field('password', { type: 'String' })
    t.nullable.field('groupId', { type: 'Int' })
  },
})

export const UserMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('email', { type: 'String' })
    t.nullable.field('name', { type: 'String' })
    t.nullable.field('password', { type: 'String' })
    t.nullable.field('groupId', { type: 'Int' })
  },
})

export const PostCountOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'PostCountOutputType',
  definition(t) {
    t.field('comments', { type: 'Int' })
  },
})

export const PostCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'PostCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('published', { type: 'Int' })
    t.field('title', { type: 'Int' })
    t.field('authorId', { type: 'Int' })
    t.field('createdAt', { type: 'Int' })
    t.field('updatedAt', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const PostAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'PostAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' })
    t.nullable.field('authorId', { type: 'Float' })
  },
})

export const PostSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'PostSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('authorId', { type: 'Int' })
  },
})

export const PostMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'PostMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('published', { type: 'Boolean' })
    t.nullable.field('title', { type: 'String' })
    t.nullable.field('authorId', { type: 'Int' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('updatedAt', { type: 'DateTime' })
  },
})

export const PostMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'PostMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('published', { type: 'Boolean' })
    t.nullable.field('title', { type: 'String' })
    t.nullable.field('authorId', { type: 'Int' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('updatedAt', { type: 'DateTime' })
  },
})

export const CommentCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CommentCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('contain', { type: 'Int' })
    t.field('postId', { type: 'Int' })
    t.field('authorId', { type: 'Int' })
    t.field('createdAt', { type: 'Int' })
    t.field('updatedAt', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const CommentAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CommentAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' })
    t.nullable.field('postId', { type: 'Float' })
    t.nullable.field('authorId', { type: 'Float' })
  },
})

export const CommentSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CommentSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('postId', { type: 'Int' })
    t.nullable.field('authorId', { type: 'Int' })
  },
})

export const CommentMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CommentMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('contain', { type: 'String' })
    t.nullable.field('postId', { type: 'Int' })
    t.nullable.field('authorId', { type: 'Int' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('updatedAt', { type: 'DateTime' })
  },
})

export const CommentMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CommentMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('contain', { type: 'String' })
    t.nullable.field('postId', { type: 'Int' })
    t.nullable.field('authorId', { type: 'Int' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('updatedAt', { type: 'DateTime' })
  },
})

export const GroupCountOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'GroupCountOutputType',
  definition(t) {
    t.field('users', { type: 'Int' })
  },
})

export const GroupCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'GroupCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('name', { type: 'Int' })
    t.field('createdAt', { type: 'Int' })
    t.field('updatedAt', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const GroupAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'GroupAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' })
  },
})

export const GroupSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'GroupSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
  },
})

export const GroupMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'GroupMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('name', { type: 'String' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('updatedAt', { type: 'DateTime' })
  },
})

export const GroupMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'GroupMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('name', { type: 'String' })
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('updatedAt', { type: 'DateTime' })
  },
})

export const ListCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ListCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('integer', { type: 'Int' })
    t.field('float', { type: 'Int' })
    t.field('string', { type: 'Int' })
    t.field('enums', { type: 'Int' })
    t.field('boolean', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const ListAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ListAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' })
    t.nullable.field('integer', { type: 'Float' })
    t.nullable.field('float', { type: 'Float' })
  },
})

export const ListSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ListSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('integer', { type: 'Int' })
    t.nullable.field('float', { type: 'Float' })
  },
})

export const ListMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ListMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
  },
})

export const ListMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ListMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
  },
})
