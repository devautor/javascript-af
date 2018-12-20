export const typeDefs = /* GraphQL */ `type AggregateNews {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
  createNews(data: NewsCreateInput!): News!
  updateNews(data: NewsUpdateInput!, where: NewsWhereUniqueInput!): News
  updateManyNewses(data: NewsUpdateManyMutationInput!, where: NewsWhereInput): BatchPayload!
  upsertNews(where: NewsWhereUniqueInput!, create: NewsCreateInput!, update: NewsUpdateInput!): News!
  deleteNews(where: NewsWhereUniqueInput!): News
  deleteManyNewses(where: NewsWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

type News {
  id: ID!
  title: String!
  slug: String!
  content: String!
  previewImage: String
  isFeatured: Boolean
  writer: User!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type NewsConnection {
  pageInfo: PageInfo!
  edges: [NewsEdge]!
  aggregate: AggregateNews!
}

input NewsCreateInput {
  title: String!
  slug: String!
  content: String!
  previewImage: String
  isFeatured: Boolean
  writer: UserCreateOneWithoutNewsItemsInput!
}

input NewsCreateManyWithoutWriterInput {
  create: [NewsCreateWithoutWriterInput!]
  connect: [NewsWhereUniqueInput!]
}

input NewsCreateWithoutWriterInput {
  title: String!
  slug: String!
  content: String!
  previewImage: String
  isFeatured: Boolean
}

type NewsEdge {
  node: News!
  cursor: String!
}

enum NewsOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  slug_ASC
  slug_DESC
  content_ASC
  content_DESC
  previewImage_ASC
  previewImage_DESC
  isFeatured_ASC
  isFeatured_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type NewsPreviousValues {
  id: ID!
  title: String!
  slug: String!
  content: String!
  previewImage: String
  isFeatured: Boolean
  createdAt: DateTime!
  updatedAt: DateTime!
}

input NewsScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  slug: String
  slug_not: String
  slug_in: [String!]
  slug_not_in: [String!]
  slug_lt: String
  slug_lte: String
  slug_gt: String
  slug_gte: String
  slug_contains: String
  slug_not_contains: String
  slug_starts_with: String
  slug_not_starts_with: String
  slug_ends_with: String
  slug_not_ends_with: String
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  previewImage: String
  previewImage_not: String
  previewImage_in: [String!]
  previewImage_not_in: [String!]
  previewImage_lt: String
  previewImage_lte: String
  previewImage_gt: String
  previewImage_gte: String
  previewImage_contains: String
  previewImage_not_contains: String
  previewImage_starts_with: String
  previewImage_not_starts_with: String
  previewImage_ends_with: String
  previewImage_not_ends_with: String
  isFeatured: Boolean
  isFeatured_not: Boolean
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [NewsScalarWhereInput!]
  OR: [NewsScalarWhereInput!]
  NOT: [NewsScalarWhereInput!]
}

type NewsSubscriptionPayload {
  mutation: MutationType!
  node: News
  updatedFields: [String!]
  previousValues: NewsPreviousValues
}

input NewsSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: NewsWhereInput
  AND: [NewsSubscriptionWhereInput!]
  OR: [NewsSubscriptionWhereInput!]
  NOT: [NewsSubscriptionWhereInput!]
}

input NewsUpdateInput {
  title: String
  slug: String
  content: String
  previewImage: String
  isFeatured: Boolean
  writer: UserUpdateOneRequiredWithoutNewsItemsInput
}

input NewsUpdateManyDataInput {
  title: String
  slug: String
  content: String
  previewImage: String
  isFeatured: Boolean
}

input NewsUpdateManyMutationInput {
  title: String
  slug: String
  content: String
  previewImage: String
  isFeatured: Boolean
}

input NewsUpdateManyWithoutWriterInput {
  create: [NewsCreateWithoutWriterInput!]
  delete: [NewsWhereUniqueInput!]
  connect: [NewsWhereUniqueInput!]
  disconnect: [NewsWhereUniqueInput!]
  update: [NewsUpdateWithWhereUniqueWithoutWriterInput!]
  upsert: [NewsUpsertWithWhereUniqueWithoutWriterInput!]
  deleteMany: [NewsScalarWhereInput!]
  updateMany: [NewsUpdateManyWithWhereNestedInput!]
}

input NewsUpdateManyWithWhereNestedInput {
  where: NewsScalarWhereInput!
  data: NewsUpdateManyDataInput!
}

input NewsUpdateWithoutWriterDataInput {
  title: String
  slug: String
  content: String
  previewImage: String
  isFeatured: Boolean
}

input NewsUpdateWithWhereUniqueWithoutWriterInput {
  where: NewsWhereUniqueInput!
  data: NewsUpdateWithoutWriterDataInput!
}

input NewsUpsertWithWhereUniqueWithoutWriterInput {
  where: NewsWhereUniqueInput!
  update: NewsUpdateWithoutWriterDataInput!
  create: NewsCreateWithoutWriterInput!
}

input NewsWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  slug: String
  slug_not: String
  slug_in: [String!]
  slug_not_in: [String!]
  slug_lt: String
  slug_lte: String
  slug_gt: String
  slug_gte: String
  slug_contains: String
  slug_not_contains: String
  slug_starts_with: String
  slug_not_starts_with: String
  slug_ends_with: String
  slug_not_ends_with: String
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  previewImage: String
  previewImage_not: String
  previewImage_in: [String!]
  previewImage_not_in: [String!]
  previewImage_lt: String
  previewImage_lte: String
  previewImage_gt: String
  previewImage_gte: String
  previewImage_contains: String
  previewImage_not_contains: String
  previewImage_starts_with: String
  previewImage_not_starts_with: String
  previewImage_ends_with: String
  previewImage_not_ends_with: String
  isFeatured: Boolean
  isFeatured_not: Boolean
  writer: UserWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [NewsWhereInput!]
  OR: [NewsWhereInput!]
  NOT: [NewsWhereInput!]
}

input NewsWhereUniqueInput {
  id: ID
  slug: String
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  news(where: NewsWhereUniqueInput!): News
  newses(where: NewsWhereInput, orderBy: NewsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [News]!
  newsesConnection(where: NewsWhereInput, orderBy: NewsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NewsConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  news(where: NewsSubscriptionWhereInput): NewsSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  username: String!
  email: String
  newsItems(where: NewsWhereInput, orderBy: NewsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [News!]
  githubToken: String!
  profileUrl: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  username: String!
  email: String
  newsItems: NewsCreateManyWithoutWriterInput
  githubToken: String!
  profileUrl: String
}

input UserCreateOneWithoutNewsItemsInput {
  create: UserCreateWithoutNewsItemsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutNewsItemsInput {
  name: String!
  username: String!
  email: String
  githubToken: String!
  profileUrl: String
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  username_ASC
  username_DESC
  email_ASC
  email_DESC
  githubToken_ASC
  githubToken_DESC
  profileUrl_ASC
  profileUrl_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  username: String!
  email: String
  githubToken: String!
  profileUrl: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  username: String
  email: String
  newsItems: NewsUpdateManyWithoutWriterInput
  githubToken: String
  profileUrl: String
}

input UserUpdateManyMutationInput {
  name: String
  username: String
  email: String
  githubToken: String
  profileUrl: String
}

input UserUpdateOneRequiredWithoutNewsItemsInput {
  create: UserCreateWithoutNewsItemsInput
  update: UserUpdateWithoutNewsItemsDataInput
  upsert: UserUpsertWithoutNewsItemsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutNewsItemsDataInput {
  name: String
  username: String
  email: String
  githubToken: String
  profileUrl: String
}

input UserUpsertWithoutNewsItemsInput {
  update: UserUpdateWithoutNewsItemsDataInput!
  create: UserCreateWithoutNewsItemsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  newsItems_every: NewsWhereInput
  newsItems_some: NewsWhereInput
  newsItems_none: NewsWhereInput
  githubToken: String
  githubToken_not: String
  githubToken_in: [String!]
  githubToken_not_in: [String!]
  githubToken_lt: String
  githubToken_lte: String
  githubToken_gt: String
  githubToken_gte: String
  githubToken_contains: String
  githubToken_not_contains: String
  githubToken_starts_with: String
  githubToken_not_starts_with: String
  githubToken_ends_with: String
  githubToken_not_ends_with: String
  profileUrl: String
  profileUrl_not: String
  profileUrl_in: [String!]
  profileUrl_not_in: [String!]
  profileUrl_lt: String
  profileUrl_lte: String
  profileUrl_gt: String
  profileUrl_gte: String
  profileUrl_contains: String
  profileUrl_not_contains: String
  profileUrl_starts_with: String
  profileUrl_not_starts_with: String
  profileUrl_ends_with: String
  profileUrl_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  username: String
  email: String
}
`