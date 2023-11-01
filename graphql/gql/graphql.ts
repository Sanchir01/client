/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AuthInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
  user: ReturnUserFields;
};

export type CreateCategoryInput = {
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type CreateProductInput = {
  categorySlug: Scalars['String']['input'];
  description: Scalars['String']['input'];
  images: Array<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  news?: InputMaybe<Scalars['Boolean']['input']>;
  price: Scalars['Int']['input'];
  sellers?: InputMaybe<Scalars['Boolean']['input']>;
  size: Array<Scalars['String']['input']>;
};

export type CreateSizeInput = {
  name: Scalars['String']['input'];
};

export type GetAllProductInput = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
  maxPrice?: InputMaybe<Scalars['String']['input']>;
  minPrice?: InputMaybe<Scalars['String']['input']>;
  newProduct?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  perPage?: InputMaybe<Scalars['String']['input']>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  seller?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};

export type GetCategoryByIdInput = {
  id: Scalars['Int']['input'];
};

export type GetCategoryBySlugInput = {
  slug: Scalars['String']['input'];
};

export type GetProductById = {
  id: Scalars['Int']['input'];
};

export type GetProductBySlug = {
  slug: Scalars['String']['input'];
};

export type LoginInput = {
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCategory: ResponseCategory;
  createProduct: Product;
  createSize: Size;
  deleteCategory: ResponseCategory;
  deleteProduct: Product;
  deleteSize: Size;
  login: AuthResponse;
  newToken: NewTokensResponse;
  register: AuthResponse;
  toggleFavoritesProfile: Scalars['String']['output'];
  updateCategory: ResponseCategory;
  updateProfile: User;
};


export type MutationCreateCategoryArgs = {
  createCategoryInput: CreateCategoryInput;
};


export type MutationCreateProductArgs = {
  createProductInput: CreateProductInput;
};


export type MutationCreateSizeArgs = {
  crateSizeInput: CreateSizeInput;
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['Float']['input'];
};


export type MutationDeleteProductArgs = {
  deleteProductById: GetProductById;
};


export type MutationDeleteSizeArgs = {
  id: Scalars['Float']['input'];
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationRegisterArgs = {
  authInput: AuthInput;
};


export type MutationToggleFavoritesProfileArgs = {
  productId: Scalars['Float']['input'];
};


export type MutationUpdateCategoryArgs = {
  updateCategoryInput: UpdateCategoryInput;
};


export type MutationUpdateProfileArgs = {
  updateUserProfileInput: UpdateUserProfileInput;
};

export type Product = {
  __typename?: 'Product';
  categoryId: Scalars['Int']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  images: Array<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  size: Array<Size>;
  slug: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  /** allCategories */
  getAllCategories: Array<ResponseCategory>;
  getAllProducts: AllProductsAndLength;
  getAllSize: Array<Size>;
  getCategoryById: ResponseCategory;
  /** nameGetCategoryBySlug */
  getCategoryBySlug: ResponseCategory;
  getProductById: Product;
  getProductBySlug: Product;
  getProfile: User;
};


export type QueryGetAllProductsArgs = {
  getAllProductInput: GetAllProductInput;
};


export type QueryGetCategoryByIdArgs = {
  getCategoryByIdInput: GetCategoryByIdInput;
};


export type QueryGetCategoryBySlugArgs = {
  getCategoryBySlugInput: GetCategoryBySlugInput;
};


export type QueryGetProductByIdArgs = {
  getProductById: GetProductById;
};


export type QueryGetProductBySlugArgs = {
  getProductBySlug: GetProductBySlug;
};

export type ResponseCategory = {
  __typename?: 'ResponseCategory';
  id: Scalars['Int']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type Size = {
  __typename?: 'Size';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type UpdateCategoryInput = {
  id: Scalars['Int']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type UpdateUserProfileInput = {
  avatarPath?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  avatarPath: Scalars['String']['output'];
  email: Scalars['String']['output'];
  favorites?: Maybe<Array<Product>>;
  id: Scalars['Int']['output'];
  isAdmin: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
};

export type AllProductsAndLength = {
  __typename?: 'allProductsAndLength';
  length: Scalars['Int']['output'];
  products: Array<Product>;
};

export type NewTokensResponse = {
  __typename?: 'newTokensResponse';
  User: ReturnUserFields;
  accessToken: Scalars['String']['output'];
};

export type ReturnUserFields = {
  __typename?: 'returnUserFields';
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  isAdmin: Scalars['Boolean']['output'];
};

export type GetOneProductByIdQueryVariables = Exact<{
  getProductById: GetProductById;
}>;


export type GetOneProductByIdQuery = { __typename?: 'Query', getProductById: { __typename?: 'Product', id: number, description: string, images: Array<string>, name: string, price: number, categoryId: number, size: Array<{ __typename?: 'Size', id: number, name: string }> } };

export type GetUserProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserProfileQuery = { __typename?: 'Query', getProfile: { __typename?: 'User', id: number, isAdmin: boolean } };

export type ToggleFavoritesProfileMutationVariables = Exact<{
  productId: Scalars['Float']['input'];
}>;


export type ToggleFavoritesProfileMutation = { __typename?: 'Mutation', toggleFavoritesProfile: string };

export type GetUserFavoritesIdArrayQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserFavoritesIdArrayQuery = { __typename?: 'Query', getProfile: { __typename?: 'User', favorites?: Array<{ __typename?: 'Product', id: number }> | null } };

export type GetUserFavoritesAllQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserFavoritesAllQuery = { __typename?: 'Query', getProfile: { __typename?: 'User', favorites?: Array<{ __typename?: 'Product', id: number, images: Array<string>, name: string, price: number, size: Array<{ __typename?: 'Size', name: string, id: number }> }> | null } };

export type LoginMutationVariables = Exact<{
  loginInput: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthResponse', accessToken: string, refreshToken: string, user: { __typename?: 'returnUserFields', email: string, id: number, isAdmin: boolean } } };

export type GetNewTokenMutationVariables = Exact<{ [key: string]: never; }>;


export type GetNewTokenMutation = { __typename?: 'Mutation', newToken: { __typename?: 'newTokensResponse', accessToken: string, User: { __typename?: 'returnUserFields', isAdmin: boolean, id: number } } };

export type GetAllCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCategoriesQuery = { __typename?: 'Query', getAllCategories: Array<{ __typename?: 'ResponseCategory', id: number, name: string, slug: string, image: string }> };

export type GetAllProductsDashboardQueryVariables = Exact<{
  getAllProductInput: GetAllProductInput;
}>;


export type GetAllProductsDashboardQuery = { __typename?: 'Query', getAllProducts: { __typename?: 'allProductsAndLength', length: number, products: Array<{ __typename?: 'Product', id: number, images: Array<string>, name: string, price: number, size: Array<{ __typename?: 'Size', id: number, name: string }> }> } };


export const GetOneProductByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOneProductById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getProductById"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetProductById"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProductById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"getProductById"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getProductById"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"categoryId"}},{"kind":"Field","name":{"kind":"Name","value":"size"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetOneProductByIdQuery, GetOneProductByIdQueryVariables>;
export const GetUserProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}}]}}]}}]} as unknown as DocumentNode<GetUserProfileQuery, GetUserProfileQueryVariables>;
export const ToggleFavoritesProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ToggleFavoritesProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"toggleFavoritesProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"productId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productId"}}}]}]}}]} as unknown as DocumentNode<ToggleFavoritesProfileMutation, ToggleFavoritesProfileMutationVariables>;
export const GetUserFavoritesIdArrayDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserFavoritesIdArray"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"favorites"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetUserFavoritesIdArrayQuery, GetUserFavoritesIdArrayQueryVariables>;
export const GetUserFavoritesAllDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserFavoritesAll"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"favorites"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"size"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetUserFavoritesAllQuery, GetUserFavoritesAllQueryVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"loginInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"loginInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"loginInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}}]}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const GetNewTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"getNewToken"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newToken"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}}]}}]} as unknown as DocumentNode<GetNewTokenMutation, GetNewTokenMutationVariables>;
export const GetAllCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]} as unknown as DocumentNode<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>;
export const GetAllProductsDashboardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllProductsDashboard"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getAllProductInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetAllProductInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllProducts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"getAllProductInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getAllProductInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"length"}},{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"size"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetAllProductsDashboardQuery, GetAllProductsDashboardQueryVariables>;