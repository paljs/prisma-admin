import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date custom scalar type */
  DateTime: any;
  /** Json custom scalar type */
  Json: any;
};

export type AggregateComment = {
  __typename?: 'AggregateComment';
  avg?: Maybe<CommentAvgAggregateOutputType>;
  count?: Maybe<CommentCountAggregateOutputType>;
  max?: Maybe<CommentMaxAggregateOutputType>;
  min?: Maybe<CommentMinAggregateOutputType>;
  sum?: Maybe<CommentSumAggregateOutputType>;
};

export type AggregateGroup = {
  __typename?: 'AggregateGroup';
  avg?: Maybe<GroupAvgAggregateOutputType>;
  count?: Maybe<GroupCountAggregateOutputType>;
  max?: Maybe<GroupMaxAggregateOutputType>;
  min?: Maybe<GroupMinAggregateOutputType>;
  sum?: Maybe<GroupSumAggregateOutputType>;
};

export type AggregateList = {
  __typename?: 'AggregateList';
  avg?: Maybe<ListAvgAggregateOutputType>;
  count?: Maybe<ListCountAggregateOutputType>;
  max?: Maybe<ListMaxAggregateOutputType>;
  min?: Maybe<ListMinAggregateOutputType>;
  sum?: Maybe<ListSumAggregateOutputType>;
};

export type AggregatePost = {
  __typename?: 'AggregatePost';
  avg?: Maybe<PostAvgAggregateOutputType>;
  count?: Maybe<PostCountAggregateOutputType>;
  max?: Maybe<PostMaxAggregateOutputType>;
  min?: Maybe<PostMinAggregateOutputType>;
  sum?: Maybe<PostSumAggregateOutputType>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  avg?: Maybe<UserAvgAggregateOutputType>;
  count?: Maybe<UserCountAggregateOutputType>;
  max?: Maybe<UserMaxAggregateOutputType>;
  min?: Maybe<UserMinAggregateOutputType>;
  sum?: Maybe<UserSumAggregateOutputType>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  count: Scalars['Int'];
};

export type BoolFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type BoolNullableListFilter = {
  equals?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type Comment = {
  __typename?: 'Comment';
  author?: Maybe<User>;
  authorId?: Maybe<Scalars['Int']>;
  contain: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  post: Post;
  postId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type CommentAvgAggregateOutputType = {
  __typename?: 'CommentAvgAggregateOutputType';
  authorId?: Maybe<Scalars['Float']>;
  id: Scalars['Float'];
  postId: Scalars['Float'];
};

export type CommentCountAggregateOutputType = {
  __typename?: 'CommentCountAggregateOutputType';
  _all: Scalars['Int'];
  authorId?: Maybe<Scalars['Int']>;
  contain?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  postId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['Int']>;
};

export type CommentCreateInput = {
  author?: Maybe<UserCreateOneWithoutCommentsInput>;
  contain: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  post: PostCreateOneWithoutCommentsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CommentCreateManyWithoutAuthorInput = {
  connect?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<CommentCreateOrConnectWithoutauthorInput>>>;
  create?: Maybe<Array<Maybe<CommentCreateWithoutAuthorInput>>>;
};

export type CommentCreateManyWithoutPostInput = {
  connect?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<CommentCreateOrConnectWithoutpostInput>>>;
  create?: Maybe<Array<Maybe<CommentCreateWithoutPostInput>>>;
};

export type CommentCreateOrConnectWithoutauthorInput = {
  create: CommentCreateWithoutAuthorInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateOrConnectWithoutpostInput = {
  create: CommentCreateWithoutPostInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateWithoutAuthorInput = {
  contain: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  post: PostCreateOneWithoutCommentsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CommentCreateWithoutPostInput = {
  author?: Maybe<UserCreateOneWithoutCommentsInput>;
  contain: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CommentListRelationFilter = {
  every?: Maybe<CommentWhereInput>;
  none?: Maybe<CommentWhereInput>;
  some?: Maybe<CommentWhereInput>;
};

export type CommentMaxAggregateOutputType = {
  __typename?: 'CommentMaxAggregateOutputType';
  authorId?: Maybe<Scalars['Int']>;
  contain?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  postId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CommentMinAggregateOutputType = {
  __typename?: 'CommentMinAggregateOutputType';
  authorId?: Maybe<Scalars['Int']>;
  contain?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  postId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CommentOrderByInput = {
  authorId?: Maybe<SortOrder>;
  contain?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  postId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export enum CommentScalarFieldEnum {
  AuthorId = 'authorId',
  Contain = 'contain',
  CreatedAt = 'createdAt',
  Id = 'id',
  PostId = 'postId',
  UpdatedAt = 'updatedAt'
}

export type CommentScalarWhereInput = {
  AND?: Maybe<Array<Maybe<CommentScalarWhereInput>>>;
  authorId?: Maybe<IntNullableFilter>;
  contain?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  NOT?: Maybe<Array<Maybe<CommentScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<CommentScalarWhereInput>>>;
  postId?: Maybe<IntFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type CommentSumAggregateOutputType = {
  __typename?: 'CommentSumAggregateOutputType';
  authorId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  postId: Scalars['Int'];
};

export type CommentUpdateInput = {
  author?: Maybe<UserUpdateOneWithoutCommentsInput>;
  contain?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  post?: Maybe<PostUpdateOneRequiredWithoutCommentsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpdateManyMutationInput = {
  contain?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpdateManyWithoutAuthorInput = {
  connect?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<CommentCreateOrConnectWithoutauthorInput>>>;
  create?: Maybe<Array<Maybe<CommentCreateWithoutAuthorInput>>>;
  delete?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<CommentScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<CommentUpdateWithWhereUniqueWithoutAuthorInput>>>;
  updateMany?: Maybe<Array<Maybe<CommentUpdateManyWithWhereWithoutAuthorInput>>>;
  upsert?: Maybe<Array<Maybe<CommentUpsertWithWhereUniqueWithoutAuthorInput>>>;
};

export type CommentUpdateManyWithoutPostInput = {
  connect?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<CommentCreateOrConnectWithoutpostInput>>>;
  create?: Maybe<Array<Maybe<CommentCreateWithoutPostInput>>>;
  delete?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<CommentScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<CommentWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<CommentUpdateWithWhereUniqueWithoutPostInput>>>;
  updateMany?: Maybe<Array<Maybe<CommentUpdateManyWithWhereWithoutPostInput>>>;
  upsert?: Maybe<Array<Maybe<CommentUpsertWithWhereUniqueWithoutPostInput>>>;
};

export type CommentUpdateManyWithWhereWithoutAuthorInput = {
  data: CommentUpdateManyMutationInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateManyWithWhereWithoutPostInput = {
  data: CommentUpdateManyMutationInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateWithoutAuthorInput = {
  contain?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  post?: Maybe<PostUpdateOneRequiredWithoutCommentsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpdateWithoutPostInput = {
  author?: Maybe<UserUpdateOneWithoutCommentsInput>;
  contain?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpdateWithWhereUniqueWithoutAuthorInput = {
  data: CommentUpdateWithoutAuthorInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateWithWhereUniqueWithoutPostInput = {
  data: CommentUpdateWithoutPostInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpsertWithWhereUniqueWithoutAuthorInput = {
  create: CommentCreateWithoutAuthorInput;
  update: CommentUpdateWithoutAuthorInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpsertWithWhereUniqueWithoutPostInput = {
  create: CommentCreateWithoutPostInput;
  update: CommentUpdateWithoutPostInput;
  where: CommentWhereUniqueInput;
};

export type CommentWhereInput = {
  AND?: Maybe<Array<Maybe<CommentWhereInput>>>;
  author?: Maybe<UserWhereInput>;
  authorId?: Maybe<IntNullableFilter>;
  contain?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  NOT?: Maybe<Array<Maybe<CommentWhereInput>>>;
  OR?: Maybe<Array<Maybe<CommentWhereInput>>>;
  post?: Maybe<PostWhereInput>;
  postId?: Maybe<IntFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type CommentWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};


export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type Enum = {
  __typename?: 'Enum';
  fields: Array<Scalars['String']>;
  name: Scalars['String'];
};

export type EnumRolsNullableListFilter = {
  equals?: Maybe<Array<Maybe<Rols>>>;
};

export type Field = {
  __typename?: 'Field';
  create: Scalars['Boolean'];
  editor: Scalars['Boolean'];
  filter: Scalars['Boolean'];
  id: Scalars['String'];
  isId: Scalars['Boolean'];
  kind: KindEnum;
  list: Scalars['Boolean'];
  name: Scalars['String'];
  order: Scalars['Int'];
  read: Scalars['Boolean'];
  relationField?: Maybe<Scalars['Boolean']>;
  required: Scalars['Boolean'];
  sort: Scalars['Boolean'];
  title: Scalars['String'];
  type: Scalars['String'];
  unique: Scalars['Boolean'];
  update: Scalars['Boolean'];
  upload: Scalars['Boolean'];
};

export type FloatNullableListFilter = {
  equals?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type Group = {
  __typename?: 'Group';
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  users: Array<User>;
};


export type GroupUsersArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<UserScalarFieldEnum>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};

export type GroupAvgAggregateOutputType = {
  __typename?: 'GroupAvgAggregateOutputType';
  id: Scalars['Float'];
};

export type GroupCountAggregateOutputType = {
  __typename?: 'GroupCountAggregateOutputType';
  _all: Scalars['Int'];
  createdAt?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type GroupCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UserCreateManyWithoutGroupInput>;
};

export type GroupCreateOneWithoutUsersInput = {
  connect?: Maybe<GroupWhereUniqueInput>;
  connectOrCreate?: Maybe<GroupCreateOrConnectWithoutusersInput>;
  create?: Maybe<GroupCreateWithoutUsersInput>;
};

export type GroupCreateOrConnectWithoutusersInput = {
  create: GroupCreateWithoutUsersInput;
  where: GroupWhereUniqueInput;
};

export type GroupCreateWithoutUsersInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GroupMaxAggregateOutputType = {
  __typename?: 'GroupMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GroupMinAggregateOutputType = {
  __typename?: 'GroupMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GroupOrderByInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type GroupRelationFilter = {
  is?: Maybe<GroupWhereInput>;
  isNot?: Maybe<GroupWhereInput>;
};

export enum GroupScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type GroupSumAggregateOutputType = {
  __typename?: 'GroupSumAggregateOutputType';
  id: Scalars['Int'];
};

export type GroupUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  users?: Maybe<UserUpdateManyWithoutGroupInput>;
};

export type GroupUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type GroupUpdateOneWithoutUsersInput = {
  connect?: Maybe<GroupWhereUniqueInput>;
  connectOrCreate?: Maybe<GroupCreateOrConnectWithoutusersInput>;
  create?: Maybe<GroupCreateWithoutUsersInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<GroupUpdateWithoutUsersInput>;
  upsert?: Maybe<GroupUpsertWithoutUsersInput>;
};

export type GroupUpdateWithoutUsersInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type GroupUpsertWithoutUsersInput = {
  create: GroupCreateWithoutUsersInput;
  update: GroupUpdateWithoutUsersInput;
};

export type GroupWhereInput = {
  AND?: Maybe<Array<Maybe<GroupWhereInput>>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<Maybe<GroupWhereInput>>>;
  OR?: Maybe<Array<Maybe<GroupWhereInput>>>;
  updatedAt?: Maybe<DateTimeFilter>;
  users?: Maybe<UserListRelationFilter>;
};

export type GroupWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type IntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type IntNullableListFilter = {
  equals?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export enum KindEnum {
  Enum = 'enum',
  Object = 'object',
  Scalar = 'scalar'
}

export type List = {
  __typename?: 'List';
  boolean: Array<Scalars['Boolean']>;
  enums: Array<Rols>;
  flout: Array<Scalars['Float']>;
  id: Scalars['Int'];
  intger: Array<Scalars['Int']>;
  string: Array<Scalars['String']>;
};

export type ListAvgAggregateOutputType = {
  __typename?: 'ListAvgAggregateOutputType';
  flout?: Maybe<Scalars['Float']>;
  id: Scalars['Float'];
  intger?: Maybe<Scalars['Float']>;
};

export type ListCountAggregateOutputType = {
  __typename?: 'ListCountAggregateOutputType';
  _all: Scalars['Int'];
  boolean?: Maybe<Scalars['Int']>;
  enums?: Maybe<Scalars['Int']>;
  flout?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  intger?: Maybe<Scalars['Int']>;
  string?: Maybe<Scalars['Int']>;
};

export type ListCreatebooleanInput = {
  set: Scalars['Boolean'];
};

export type ListCreateenumsInput = {
  set: Rols;
};

export type ListCreatefloutInput = {
  set: Scalars['Float'];
};

export type ListCreateInput = {
  boolean?: Maybe<ListCreatebooleanInput>;
  enums?: Maybe<ListCreateenumsInput>;
  flout?: Maybe<ListCreatefloutInput>;
  intger?: Maybe<ListCreateintgerInput>;
  string?: Maybe<ListCreatestringInput>;
};

export type ListCreateintgerInput = {
  set: Scalars['Int'];
};

export type ListCreatestringInput = {
  set: Scalars['String'];
};

export type ListMaxAggregateOutputType = {
  __typename?: 'ListMaxAggregateOutputType';
  id: Scalars['Int'];
};

export type ListMinAggregateOutputType = {
  __typename?: 'ListMinAggregateOutputType';
  id: Scalars['Int'];
};

export type ListOrderByInput = {
  boolean?: Maybe<SortOrder>;
  enums?: Maybe<SortOrder>;
  flout?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  intger?: Maybe<SortOrder>;
  string?: Maybe<SortOrder>;
};

export enum ListScalarFieldEnum {
  Boolean = 'boolean',
  Enums = 'enums',
  Flout = 'flout',
  Id = 'id',
  Intger = 'intger',
  String = 'string'
}

export type ListSumAggregateOutputType = {
  __typename?: 'ListSumAggregateOutputType';
  flout?: Maybe<Scalars['Float']>;
  id: Scalars['Int'];
  intger?: Maybe<Scalars['Int']>;
};

export type ListUpdatebooleanInput = {
  set: Scalars['Boolean'];
};

export type ListUpdateenumsInput = {
  set: Rols;
};

export type ListUpdatefloutInput = {
  set: Scalars['Float'];
};

export type ListUpdateInput = {
  boolean?: Maybe<ListUpdatebooleanInput>;
  enums?: Maybe<ListUpdateenumsInput>;
  flout?: Maybe<ListUpdatefloutInput>;
  intger?: Maybe<ListUpdateintgerInput>;
  string?: Maybe<ListUpdatestringInput>;
};

export type ListUpdateintgerInput = {
  set: Scalars['Int'];
};

export type ListUpdateManyMutationInput = {
  boolean?: Maybe<ListUpdatebooleanInput>;
  enums?: Maybe<ListUpdateenumsInput>;
  flout?: Maybe<ListUpdatefloutInput>;
  intger?: Maybe<ListUpdateintgerInput>;
  string?: Maybe<ListUpdatestringInput>;
};

export type ListUpdatestringInput = {
  set: Scalars['String'];
};

export type ListWhereInput = {
  AND?: Maybe<Array<Maybe<ListWhereInput>>>;
  boolean?: Maybe<BoolNullableListFilter>;
  enums?: Maybe<EnumRolsNullableListFilter>;
  flout?: Maybe<FloatNullableListFilter>;
  id?: Maybe<IntFilter>;
  intger?: Maybe<IntNullableListFilter>;
  NOT?: Maybe<Array<Maybe<ListWhereInput>>>;
  OR?: Maybe<Array<Maybe<ListWhereInput>>>;
  string?: Maybe<StringNullableListFilter>;
};

export type ListWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Model = {
  __typename?: 'Model';
  create: Scalars['Boolean'];
  delete: Scalars['Boolean'];
  displayFields: Array<Scalars['String']>;
  fields: Array<Field>;
  id: Scalars['String'];
  idField: Scalars['String'];
  name: Scalars['String'];
  update: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createOneComment: Comment;
  createOneGroup: Group;
  createOneList: List;
  createOnePost: Post;
  createOneUser: User;
  deleteManyComment: BatchPayload;
  deleteManyGroup: BatchPayload;
  deleteManyList: BatchPayload;
  deleteManyPost: BatchPayload;
  deleteManyUser: BatchPayload;
  deleteOneComment?: Maybe<Comment>;
  deleteOneGroup?: Maybe<Group>;
  deleteOneList?: Maybe<List>;
  deleteOnePost?: Maybe<Post>;
  deleteOneUser?: Maybe<User>;
  login?: Maybe<User>;
  logout: Scalars['Boolean'];
  signup?: Maybe<User>;
  updateField: Field;
  updateManyComment: BatchPayload;
  updateManyGroup: BatchPayload;
  updateManyList: BatchPayload;
  updateManyPost: BatchPayload;
  updateManyUser: BatchPayload;
  updateModel: Model;
  updateOneComment: Comment;
  updateOneGroup: Group;
  updateOneList: List;
  updateOnePost: Post;
  updateOneUser: User;
  updatePassword: Scalars['Boolean'];
  upsertOneComment: Comment;
  upsertOneGroup: Group;
  upsertOneList: List;
  upsertOnePost: Post;
  upsertOneUser: User;
};


export type MutationCreateOneCommentArgs = {
  data: CommentCreateInput;
};


export type MutationCreateOneGroupArgs = {
  data: GroupCreateInput;
};


export type MutationCreateOneListArgs = {
  data: ListCreateInput;
};


export type MutationCreateOnePostArgs = {
  data: PostCreateInput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteManyCommentArgs = {
  where?: Maybe<CommentWhereInput>;
};


export type MutationDeleteManyGroupArgs = {
  where?: Maybe<GroupWhereInput>;
};


export type MutationDeleteManyListArgs = {
  where?: Maybe<ListWhereInput>;
};


export type MutationDeleteManyPostArgs = {
  where?: Maybe<PostWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: Maybe<UserWhereInput>;
};


export type MutationDeleteOneCommentArgs = {
  where: CommentWhereUniqueInput;
};


export type MutationDeleteOneGroupArgs = {
  where: GroupWhereUniqueInput;
};


export type MutationDeleteOneListArgs = {
  where: ListWhereUniqueInput;
};


export type MutationDeleteOnePostArgs = {
  where: PostWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationSignupArgs = {
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
};


export type MutationUpdateFieldArgs = {
  data: UpdateFieldInput;
  id: Scalars['String'];
  modelId: Scalars['String'];
};


export type MutationUpdateManyCommentArgs = {
  data: CommentUpdateManyMutationInput;
  where?: Maybe<CommentWhereInput>;
};


export type MutationUpdateManyGroupArgs = {
  data: GroupUpdateManyMutationInput;
  where?: Maybe<GroupWhereInput>;
};


export type MutationUpdateManyListArgs = {
  data: ListUpdateManyMutationInput;
  where?: Maybe<ListWhereInput>;
};


export type MutationUpdateManyPostArgs = {
  data: PostUpdateManyMutationInput;
  where?: Maybe<PostWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: Maybe<UserWhereInput>;
};


export type MutationUpdateModelArgs = {
  data: UpdateModelInput;
  id: Scalars['String'];
};


export type MutationUpdateOneCommentArgs = {
  data: CommentUpdateInput;
  where: CommentWhereUniqueInput;
};


export type MutationUpdateOneGroupArgs = {
  data: GroupUpdateInput;
  where: GroupWhereUniqueInput;
};


export type MutationUpdateOneListArgs = {
  data: ListUpdateInput;
  where: ListWhereUniqueInput;
};


export type MutationUpdateOnePostArgs = {
  data: PostUpdateInput;
  where: PostWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdatePasswordArgs = {
  currentPassword: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUpsertOneCommentArgs = {
  create: CommentCreateInput;
  update: CommentUpdateInput;
  where: CommentWhereUniqueInput;
};


export type MutationUpsertOneGroupArgs = {
  create: GroupCreateInput;
  update: GroupUpdateInput;
  where: GroupWhereUniqueInput;
};


export type MutationUpsertOneListArgs = {
  create: ListCreateInput;
  update: ListUpdateInput;
  where: ListWhereUniqueInput;
};


export type MutationUpsertOnePostArgs = {
  create: PostCreateInput;
  update: PostUpdateInput;
  where: PostWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type NestedStringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type Post = {
  __typename?: 'Post';
  author?: Maybe<User>;
  authorId?: Maybe<Scalars['Int']>;
  comments: Array<Comment>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  published: Scalars['Boolean'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type PostCommentsArgs = {
  cursor?: Maybe<CommentWhereUniqueInput>;
  distinct?: Maybe<CommentScalarFieldEnum>;
  orderBy?: Maybe<CommentOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentWhereInput>;
};

export type PostAvgAggregateOutputType = {
  __typename?: 'PostAvgAggregateOutputType';
  authorId?: Maybe<Scalars['Float']>;
  id: Scalars['Float'];
};

export type PostCountAggregateOutputType = {
  __typename?: 'PostCountAggregateOutputType';
  _all: Scalars['Int'];
  authorId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  published?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type PostCreateInput = {
  author?: Maybe<UserCreateOneWithoutPostsInput>;
  comments?: Maybe<CommentCreateManyWithoutPostInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  published?: Maybe<Scalars['Boolean']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PostCreateManyWithoutAuthorInput = {
  connect?: Maybe<Array<Maybe<PostWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<PostCreateOrConnectWithoutauthorInput>>>;
  create?: Maybe<Array<Maybe<PostCreateWithoutAuthorInput>>>;
};

export type PostCreateOneWithoutCommentsInput = {
  connect?: Maybe<PostWhereUniqueInput>;
  connectOrCreate?: Maybe<PostCreateOrConnectWithoutcommentsInput>;
  create?: Maybe<PostCreateWithoutCommentsInput>;
};

export type PostCreateOrConnectWithoutauthorInput = {
  create: PostCreateWithoutAuthorInput;
  where: PostWhereUniqueInput;
};

export type PostCreateOrConnectWithoutcommentsInput = {
  create: PostCreateWithoutCommentsInput;
  where: PostWhereUniqueInput;
};

export type PostCreateWithoutAuthorInput = {
  comments?: Maybe<CommentCreateManyWithoutPostInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  published?: Maybe<Scalars['Boolean']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PostCreateWithoutCommentsInput = {
  author?: Maybe<UserCreateOneWithoutPostsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  published?: Maybe<Scalars['Boolean']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PostListRelationFilter = {
  every?: Maybe<PostWhereInput>;
  none?: Maybe<PostWhereInput>;
  some?: Maybe<PostWhereInput>;
};

export type PostMaxAggregateOutputType = {
  __typename?: 'PostMaxAggregateOutputType';
  authorId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  published?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PostMinAggregateOutputType = {
  __typename?: 'PostMinAggregateOutputType';
  authorId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  published?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PostOrderByInput = {
  authorId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  published?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type PostRelationFilter = {
  is?: Maybe<PostWhereInput>;
  isNot?: Maybe<PostWhereInput>;
};

export enum PostScalarFieldEnum {
  AuthorId = 'authorId',
  CreatedAt = 'createdAt',
  Id = 'id',
  Published = 'published',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type PostScalarWhereInput = {
  AND?: Maybe<Array<Maybe<PostScalarWhereInput>>>;
  authorId?: Maybe<IntNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  NOT?: Maybe<Array<Maybe<PostScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<PostScalarWhereInput>>>;
  published?: Maybe<BoolFilter>;
  title?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type PostSumAggregateOutputType = {
  __typename?: 'PostSumAggregateOutputType';
  authorId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
};

export type PostUpdateInput = {
  author?: Maybe<UserUpdateOneWithoutPostsInput>;
  comments?: Maybe<CommentUpdateManyWithoutPostInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type PostUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type PostUpdateManyWithoutAuthorInput = {
  connect?: Maybe<Array<Maybe<PostWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<PostCreateOrConnectWithoutauthorInput>>>;
  create?: Maybe<Array<Maybe<PostCreateWithoutAuthorInput>>>;
  delete?: Maybe<Array<Maybe<PostWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<PostScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<PostWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<PostWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<PostUpdateWithWhereUniqueWithoutAuthorInput>>>;
  updateMany?: Maybe<Array<Maybe<PostUpdateManyWithWhereWithoutAuthorInput>>>;
  upsert?: Maybe<Array<Maybe<PostUpsertWithWhereUniqueWithoutAuthorInput>>>;
};

export type PostUpdateManyWithWhereWithoutAuthorInput = {
  data: PostUpdateManyMutationInput;
  where: PostScalarWhereInput;
};

export type PostUpdateOneRequiredWithoutCommentsInput = {
  connect?: Maybe<PostWhereUniqueInput>;
  connectOrCreate?: Maybe<PostCreateOrConnectWithoutcommentsInput>;
  create?: Maybe<PostCreateWithoutCommentsInput>;
  update?: Maybe<PostUpdateWithoutCommentsInput>;
  upsert?: Maybe<PostUpsertWithoutCommentsInput>;
};

export type PostUpdateWithoutAuthorInput = {
  comments?: Maybe<CommentUpdateManyWithoutPostInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type PostUpdateWithoutCommentsInput = {
  author?: Maybe<UserUpdateOneWithoutPostsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
  data: PostUpdateWithoutAuthorInput;
  where: PostWhereUniqueInput;
};

export type PostUpsertWithoutCommentsInput = {
  create: PostCreateWithoutCommentsInput;
  update: PostUpdateWithoutCommentsInput;
};

export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
  create: PostCreateWithoutAuthorInput;
  update: PostUpdateWithoutAuthorInput;
  where: PostWhereUniqueInput;
};

export type PostWhereInput = {
  AND?: Maybe<Array<Maybe<PostWhereInput>>>;
  author?: Maybe<UserWhereInput>;
  authorId?: Maybe<IntNullableFilter>;
  comments?: Maybe<CommentListRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  NOT?: Maybe<Array<Maybe<PostWhereInput>>>;
  OR?: Maybe<Array<Maybe<PostWhereInput>>>;
  published?: Maybe<BoolFilter>;
  title?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type PostWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  findFirstComment?: Maybe<Comment>;
  findFirstGroup?: Maybe<Group>;
  findFirstList?: Maybe<List>;
  findFirstPost?: Maybe<Post>;
  findFirstUser?: Maybe<User>;
  findManyComment: Array<Comment>;
  findManyCommentCount: Scalars['Int'];
  findManyGroup: Array<Group>;
  findManyGroupCount: Scalars['Int'];
  findManyList: Array<List>;
  findManyListCount: Scalars['Int'];
  findManyPost: Array<Post>;
  findManyPostCount: Scalars['Int'];
  findManyUser: Array<User>;
  findManyUserCount: Scalars['Int'];
  findUniqueComment: Comment;
  findUniqueGroup: Group;
  findUniqueList: List;
  findUniquePost: Post;
  findUniqueUser: User;
  getSchema: Schema;
  me?: Maybe<User>;
};


export type QueryFindFirstCommentArgs = {
  cursor?: Maybe<CommentWhereUniqueInput>;
  distinct?: Maybe<CommentScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<CommentOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentWhereInput>;
};


export type QueryFindFirstGroupArgs = {
  cursor?: Maybe<GroupWhereUniqueInput>;
  distinct?: Maybe<GroupScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<GroupOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<GroupWhereInput>;
};


export type QueryFindFirstListArgs = {
  cursor?: Maybe<ListWhereUniqueInput>;
  distinct?: Maybe<ListScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<ListOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ListWhereInput>;
};


export type QueryFindFirstPostArgs = {
  cursor?: Maybe<PostWhereUniqueInput>;
  distinct?: Maybe<PostScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<PostOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PostWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<UserScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<UserOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryFindManyCommentArgs = {
  cursor?: Maybe<CommentWhereUniqueInput>;
  distinct?: Maybe<CommentScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<CommentOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentWhereInput>;
};


export type QueryFindManyCommentCountArgs = {
  cursor?: Maybe<CommentWhereUniqueInput>;
  distinct?: Maybe<CommentScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<CommentOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentWhereInput>;
};


export type QueryFindManyGroupArgs = {
  cursor?: Maybe<GroupWhereUniqueInput>;
  distinct?: Maybe<GroupScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<GroupOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<GroupWhereInput>;
};


export type QueryFindManyGroupCountArgs = {
  cursor?: Maybe<GroupWhereUniqueInput>;
  distinct?: Maybe<GroupScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<GroupOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<GroupWhereInput>;
};


export type QueryFindManyListArgs = {
  cursor?: Maybe<ListWhereUniqueInput>;
  distinct?: Maybe<ListScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<ListOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ListWhereInput>;
};


export type QueryFindManyListCountArgs = {
  cursor?: Maybe<ListWhereUniqueInput>;
  distinct?: Maybe<ListScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<ListOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ListWhereInput>;
};


export type QueryFindManyPostArgs = {
  cursor?: Maybe<PostWhereUniqueInput>;
  distinct?: Maybe<PostScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<PostOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PostWhereInput>;
};


export type QueryFindManyPostCountArgs = {
  cursor?: Maybe<PostWhereUniqueInput>;
  distinct?: Maybe<PostScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<PostOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PostWhereInput>;
};


export type QueryFindManyUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<UserScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<UserOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryFindManyUserCountArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<UserScalarFieldEnum>;
  orderBy?: Maybe<Array<Maybe<UserOrderByInput>>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryFindUniqueCommentArgs = {
  where?: Maybe<CommentWhereUniqueInput>;
};


export type QueryFindUniqueGroupArgs = {
  where?: Maybe<GroupWhereUniqueInput>;
};


export type QueryFindUniqueListArgs = {
  where?: Maybe<ListWhereUniqueInput>;
};


export type QueryFindUniquePostArgs = {
  where?: Maybe<PostWhereUniqueInput>;
};


export type QueryFindUniqueUserArgs = {
  where?: Maybe<UserWhereUniqueInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum Rols {
  Admin = 'ADMIN',
  User = 'USER'
}

export type Schema = {
  __typename?: 'Schema';
  enums: Array<Enum>;
  models: Array<Model>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringNullableListFilter = {
  equals?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type UpdateFieldInput = {
  create?: Maybe<Scalars['Boolean']>;
  editor?: Maybe<Scalars['Boolean']>;
  filter?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  isId?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<KindEnum>;
  list?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  read?: Maybe<Scalars['Boolean']>;
  relationField?: Maybe<Scalars['Boolean']>;
  required?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  unique?: Maybe<Scalars['Boolean']>;
  update?: Maybe<Scalars['Boolean']>;
  upload?: Maybe<Scalars['Boolean']>;
};

export type UpdateModelInput = {
  create?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  displayFields?: Maybe<Array<Maybe<Scalars['String']>>>;
  fields?: Maybe<Array<Maybe<UpdateFieldInput>>>;
  idField?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  update?: Maybe<Scalars['Boolean']>;
};

export type User = {
  __typename?: 'User';
  comments: Array<Comment>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  group?: Maybe<Group>;
  groupId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  posts: Array<Post>;
};


export type UserCommentsArgs = {
  cursor?: Maybe<CommentWhereUniqueInput>;
  distinct?: Maybe<CommentScalarFieldEnum>;
  orderBy?: Maybe<CommentOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentWhereInput>;
};


export type UserPostsArgs = {
  cursor?: Maybe<PostWhereUniqueInput>;
  distinct?: Maybe<PostScalarFieldEnum>;
  orderBy?: Maybe<PostOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PostWhereInput>;
};

export type UserAvgAggregateOutputType = {
  __typename?: 'UserAvgAggregateOutputType';
  groupId?: Maybe<Scalars['Float']>;
  id: Scalars['Float'];
};

export type UserCountAggregateOutputType = {
  __typename?: 'UserCountAggregateOutputType';
  _all: Scalars['Int'];
  createdAt?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['Int']>;
  groupId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['Int']>;
  password?: Maybe<Scalars['Int']>;
};

export type UserCreateInput = {
  comments?: Maybe<CommentCreateManyWithoutAuthorInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  group?: Maybe<GroupCreateOneWithoutUsersInput>;
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  posts?: Maybe<PostCreateManyWithoutAuthorInput>;
};

export type UserCreateManyWithoutGroupInput = {
  connect?: Maybe<Array<Maybe<UserWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<UserCreateOrConnectWithoutgroupInput>>>;
  create?: Maybe<Array<Maybe<UserCreateWithoutGroupInput>>>;
};

export type UserCreateOneWithoutCommentsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutcommentsInput>;
  create?: Maybe<UserCreateWithoutCommentsInput>;
};

export type UserCreateOneWithoutPostsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutpostsInput>;
  create?: Maybe<UserCreateWithoutPostsInput>;
};

export type UserCreateOrConnectWithoutcommentsInput = {
  create: UserCreateWithoutCommentsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutgroupInput = {
  create: UserCreateWithoutGroupInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutpostsInput = {
  create: UserCreateWithoutPostsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutCommentsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  group?: Maybe<GroupCreateOneWithoutUsersInput>;
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  posts?: Maybe<PostCreateManyWithoutAuthorInput>;
};

export type UserCreateWithoutGroupInput = {
  comments?: Maybe<CommentCreateManyWithoutAuthorInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  posts?: Maybe<PostCreateManyWithoutAuthorInput>;
};

export type UserCreateWithoutPostsInput = {
  comments?: Maybe<CommentCreateManyWithoutAuthorInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  group?: Maybe<GroupCreateOneWithoutUsersInput>;
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
};

export type UserListRelationFilter = {
  every?: Maybe<UserWhereInput>;
  none?: Maybe<UserWhereInput>;
  some?: Maybe<UserWhereInput>;
};

export type UserMaxAggregateOutputType = {
  __typename?: 'UserMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  groupId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type UserMinAggregateOutputType = {
  __typename?: 'UserMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  groupId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type UserOrderByInput = {
  createdAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  groupId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: Maybe<UserWhereInput>;
  isNot?: Maybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Email = 'email',
  GroupId = 'groupId',
  Id = 'id',
  Name = 'name',
  Password = 'password'
}

export type UserScalarWhereInput = {
  AND?: Maybe<Array<Maybe<UserScalarWhereInput>>>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringFilter>;
  groupId?: Maybe<IntNullableFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringNullableFilter>;
  NOT?: Maybe<Array<Maybe<UserScalarWhereInput>>>;
  OR?: Maybe<Array<Maybe<UserScalarWhereInput>>>;
  password?: Maybe<StringFilter>;
};

export type UserSumAggregateOutputType = {
  __typename?: 'UserSumAggregateOutputType';
  groupId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
};

export type UserUpdateInput = {
  comments?: Maybe<CommentUpdateManyWithoutAuthorInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  group?: Maybe<GroupUpdateOneWithoutUsersInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
};

export type UserUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateManyWithoutGroupInput = {
  connect?: Maybe<Array<Maybe<UserWhereUniqueInput>>>;
  connectOrCreate?: Maybe<Array<Maybe<UserCreateOrConnectWithoutgroupInput>>>;
  create?: Maybe<Array<Maybe<UserCreateWithoutGroupInput>>>;
  delete?: Maybe<Array<Maybe<UserWhereUniqueInput>>>;
  deleteMany?: Maybe<Array<Maybe<UserScalarWhereInput>>>;
  disconnect?: Maybe<Array<Maybe<UserWhereUniqueInput>>>;
  set?: Maybe<Array<Maybe<UserWhereUniqueInput>>>;
  update?: Maybe<Array<Maybe<UserUpdateWithWhereUniqueWithoutGroupInput>>>;
  updateMany?: Maybe<Array<Maybe<UserUpdateManyWithWhereWithoutGroupInput>>>;
  upsert?: Maybe<Array<Maybe<UserUpsertWithWhereUniqueWithoutGroupInput>>>;
};

export type UserUpdateManyWithWhereWithoutGroupInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateOneWithoutCommentsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutcommentsInput>;
  create?: Maybe<UserCreateWithoutCommentsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUpdateWithoutCommentsInput>;
  upsert?: Maybe<UserUpsertWithoutCommentsInput>;
};

export type UserUpdateOneWithoutPostsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutpostsInput>;
  create?: Maybe<UserCreateWithoutPostsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUpdateWithoutPostsInput>;
  upsert?: Maybe<UserUpsertWithoutPostsInput>;
};

export type UserUpdateWithoutCommentsInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  group?: Maybe<GroupUpdateOneWithoutUsersInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
};

export type UserUpdateWithoutGroupInput = {
  comments?: Maybe<CommentUpdateManyWithoutAuthorInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
};

export type UserUpdateWithoutPostsInput = {
  comments?: Maybe<CommentUpdateManyWithoutAuthorInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  group?: Maybe<GroupUpdateOneWithoutUsersInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithWhereUniqueWithoutGroupInput = {
  data: UserUpdateWithoutGroupInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithoutCommentsInput = {
  create: UserCreateWithoutCommentsInput;
  update: UserUpdateWithoutCommentsInput;
};

export type UserUpsertWithoutPostsInput = {
  create: UserCreateWithoutPostsInput;
  update: UserUpdateWithoutPostsInput;
};

export type UserUpsertWithWhereUniqueWithoutGroupInput = {
  create: UserCreateWithoutGroupInput;
  update: UserUpdateWithoutGroupInput;
  where: UserWhereUniqueInput;
};

export type UserWhereInput = {
  AND?: Maybe<Array<Maybe<UserWhereInput>>>;
  comments?: Maybe<CommentListRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringFilter>;
  group?: Maybe<GroupWhereInput>;
  groupId?: Maybe<IntNullableFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringNullableFilter>;
  NOT?: Maybe<Array<Maybe<UserWhereInput>>>;
  OR?: Maybe<Array<Maybe<UserWhereInput>>>;
  password?: Maybe<StringFilter>;
  posts?: Maybe<PostListRelationFilter>;
};

export type UserWhereUniqueInput = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'email'>
  )> }
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
  )> }
);

export type SignupMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  name?: Maybe<Scalars['String']>;
}>;


export type SignupMutation = (
  { __typename?: 'Mutation' }
  & { signup?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
  )> }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);


export const MeDocument = gql`
    query me {
  me {
    id
    name
    email
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const LoginDocument = gql`
    mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    id
  }
}
    `;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const SignupDocument = gql`
    mutation signup($email: String!, $password: String!, $name: String) {
  signup(email: $email, password: $password, name: $name) {
    id
  }
}
    `;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: Apollo.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        return Apollo.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, baseOptions);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
export const LogoutDocument = gql`
    mutation logout {
  logout
}
    `;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;