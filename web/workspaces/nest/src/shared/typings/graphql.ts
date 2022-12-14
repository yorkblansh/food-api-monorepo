
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
    published: boolean = false;
    title!: string;
    updatedAt: DateTime;
    viewCount!: number;
}

export class UpdatePostInput {
    content?: Nullable<string>;
    createdAt: DateTime;
    published: boolean = false;
    title!: string;
    updatedAt: DateTime;
    viewCount!: number;
}

export class CreateProfileInput {
    bio?: Nullable<string>;
}

export class UpdateProfileInput {
    bio?: Nullable<string>;
}

export class CreateTagInput {
    name!: string;
}

export class UpdateTagInput {
    name!: string;
}

export class CreateUserInput {
    name!: string;
    email!: string;
}

export class UpdateUserInput {
    name?: Nullable<string>;
    email?: Nullable<string>;
}

export class Post {
    id!: number;
    content?: Nullable<string>;
    createdAt: DateTime;
    published: boolean = false;
    title!: string;
    updatedAt: DateTime;
    viewCount!: number;
    author?: Nullable<User>;
    tags?: Nullable<Nullable<Tag>[]>;
}

export abstract class IQuery {
    abstract posts(): Nullable<Post>[] | Promise<Nullable<Post>[]>;

    abstract post(id: number): Nullable<Post> | Promise<Nullable<Post>>;

    abstract profiles(): Nullable<Profile>[] | Promise<Nullable<Profile>[]>;

    abstract profile(id: number): Nullable<Profile> | Promise<Nullable<Profile>>;

    abstract tags(): Nullable<Tag>[] | Promise<Nullable<Tag>[]>;

    abstract tag(id: number): Nullable<Tag> | Promise<Nullable<Tag>>;

    abstract users(): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract user(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createPost(createPostInput: CreatePostInput): Post | Promise<Post>;

    abstract updatePost(id: number, updatePostInput: UpdatePostInput): Post | Promise<Post>;

    abstract removePost(id: number): Nullable<Post> | Promise<Nullable<Post>>;

    abstract createProfile(userWhereUniqueInput: UpdateUserInput, createProfileInput: CreateProfileInput): Profile | Promise<Profile>;

    abstract updateProfile(id: number, updateProfileInput: UpdateProfileInput): Profile | Promise<Profile>;

    abstract removeProfile(id: number): Nullable<Profile> | Promise<Nullable<Profile>>;

    abstract createTag(createTagInput: CreateTagInput): Tag | Promise<Tag>;

    abstract updateTag(id: number, updateTagInput: UpdateTagInput): Tag | Promise<Tag>;

    abstract removeTag(id: number): Nullable<Tag> | Promise<Nullable<Tag>>;

    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(originUsername: string, updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract removeUser(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export class Profile {
    id!: number;
    bio?: Nullable<string>;
    user?: Nullable<User>;
}

export class Tag {
    id?: Nullable<number>;
    name?: Nullable<string>;
    posts?: Nullable<Nullable<Post>[]>;
}

export class User {
    id!: number;
    name!: string;
    email!: string;
    posts?: Nullable<Nullable<Post>[]>;
    profile?: Nullable<Profile>;
}

export type DateTime = any;
type Nullable<T> = T | null;
