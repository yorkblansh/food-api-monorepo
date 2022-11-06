
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreatePostInput {
    content?: Nullable<string>;
    createdAt: DateTime;
    published: boolean;
    title: string;
    updatedAt: DateTime;
    viewCount: number;
}

export class UpdatePostInput {
    content?: Nullable<string>;
    createdAt: DateTime;
    published: boolean;
    title: string;
    updatedAt: DateTime;
    viewCount: number;
}

export class CreateUserInput {
    name: string;
    email: string;
}

export class UpdateUserInput {
    name?: Nullable<string>;
    email?: Nullable<string>;
}

export class Post {
    id: number;
    content?: Nullable<string>;
    createdAt: DateTime;
    published: boolean;
    title: string;
    updatedAt: DateTime;
    viewCount: number;
    author?: Nullable<User>;
}

export abstract class IQuery {
    abstract posts(): Nullable<Post>[] | Promise<Nullable<Post>[]>;

    abstract post(id: number): Nullable<Post> | Promise<Nullable<Post>>;

    abstract users(): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract user(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createPost(createPostInput: CreatePostInput): Post | Promise<Post>;

    abstract updatePost(id: number, updatePostInput: UpdatePostInput): Post | Promise<Post>;

    abstract removePost(id: number): Nullable<Post> | Promise<Nullable<Post>>;

    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(originUsername: string, updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract removeUser(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export class User {
    id: number;
    name: string;
    email: string;
    posts?: Nullable<Nullable<Post>[]>;
}

export type DateTime = any;
type Nullable<T> = T | null;
