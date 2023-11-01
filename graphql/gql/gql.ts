/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query GetOneProductById($getProductById: GetProductById!) {\n  getProductById(getProductById: $getProductById) {\n    id\n    description\n    images\n    name\n    price\n    categoryId\n    size {\n      id\n      name\n    }\n  }\n}": types.GetOneProductByIdDocument,
    "query GetUserProfile {\n  getProfile {\n    id\n    isAdmin\n  }\n}\n\nmutation ToggleFavoritesProfile($productId: Float!) {\n  toggleFavoritesProfile(productId: $productId)\n}\n\nquery GetUserFavoritesIdArray {\n  getProfile {\n    favorites {\n      id\n    }\n  }\n}\n\nquery GetUserFavoritesAll {\n  getProfile {\n    favorites {\n      id\n      images\n      name\n      price\n      size {\n        name\n        id\n      }\n    }\n  }\n}": types.GetUserProfileDocument,
    "mutation Login($loginInput: LoginInput!) {\n  login(loginInput: $loginInput) {\n    accessToken\n    refreshToken\n    user {\n      email\n      id\n      isAdmin\n    }\n  }\n}\n\nmutation getNewToken {\n  newToken {\n    User {\n      isAdmin\n      id\n    }\n    accessToken\n  }\n}": types.LoginDocument,
    "query GetAllCategories {\n  getAllCategories {\n    id\n    name\n    slug\n    image\n  }\n}": types.GetAllCategoriesDocument,
    "query GetAllProductsDashboard($getAllProductInput: GetAllProductInput!) {\n  getAllProducts(getAllProductInput: $getAllProductInput) {\n    length\n    products {\n      id\n      images\n      name\n      price\n      size {\n        id\n        name\n      }\n    }\n  }\n}": types.GetAllProductsDashboardDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetOneProductById($getProductById: GetProductById!) {\n  getProductById(getProductById: $getProductById) {\n    id\n    description\n    images\n    name\n    price\n    categoryId\n    size {\n      id\n      name\n    }\n  }\n}"): (typeof documents)["query GetOneProductById($getProductById: GetProductById!) {\n  getProductById(getProductById: $getProductById) {\n    id\n    description\n    images\n    name\n    price\n    categoryId\n    size {\n      id\n      name\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetUserProfile {\n  getProfile {\n    id\n    isAdmin\n  }\n}\n\nmutation ToggleFavoritesProfile($productId: Float!) {\n  toggleFavoritesProfile(productId: $productId)\n}\n\nquery GetUserFavoritesIdArray {\n  getProfile {\n    favorites {\n      id\n    }\n  }\n}\n\nquery GetUserFavoritesAll {\n  getProfile {\n    favorites {\n      id\n      images\n      name\n      price\n      size {\n        name\n        id\n      }\n    }\n  }\n}"): (typeof documents)["query GetUserProfile {\n  getProfile {\n    id\n    isAdmin\n  }\n}\n\nmutation ToggleFavoritesProfile($productId: Float!) {\n  toggleFavoritesProfile(productId: $productId)\n}\n\nquery GetUserFavoritesIdArray {\n  getProfile {\n    favorites {\n      id\n    }\n  }\n}\n\nquery GetUserFavoritesAll {\n  getProfile {\n    favorites {\n      id\n      images\n      name\n      price\n      size {\n        name\n        id\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Login($loginInput: LoginInput!) {\n  login(loginInput: $loginInput) {\n    accessToken\n    refreshToken\n    user {\n      email\n      id\n      isAdmin\n    }\n  }\n}\n\nmutation getNewToken {\n  newToken {\n    User {\n      isAdmin\n      id\n    }\n    accessToken\n  }\n}"): (typeof documents)["mutation Login($loginInput: LoginInput!) {\n  login(loginInput: $loginInput) {\n    accessToken\n    refreshToken\n    user {\n      email\n      id\n      isAdmin\n    }\n  }\n}\n\nmutation getNewToken {\n  newToken {\n    User {\n      isAdmin\n      id\n    }\n    accessToken\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetAllCategories {\n  getAllCategories {\n    id\n    name\n    slug\n    image\n  }\n}"): (typeof documents)["query GetAllCategories {\n  getAllCategories {\n    id\n    name\n    slug\n    image\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetAllProductsDashboard($getAllProductInput: GetAllProductInput!) {\n  getAllProducts(getAllProductInput: $getAllProductInput) {\n    length\n    products {\n      id\n      images\n      name\n      price\n      size {\n        id\n        name\n      }\n    }\n  }\n}"): (typeof documents)["query GetAllProductsDashboard($getAllProductInput: GetAllProductInput!) {\n  getAllProducts(getAllProductInput: $getAllProductInput) {\n    length\n    products {\n      id\n      images\n      name\n      price\n      size {\n        id\n        name\n      }\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;