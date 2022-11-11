import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Post } from '../post/post.model';
import { Profile } from '../profile/profile.model';
import { Role } from '../role/role.model';
import { Int } from '@nestjs/graphql';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => String, {nullable:true})
    email!: string | null;

    @Field(() => [Post], {nullable:true})
    posts?: Array<Post>;

    @Field(() => Profile, {nullable:true})
    profile?: Profile | null;

    @Field(() => Role, {nullable:false})
    role?: Role;

    @Field(() => Int, {nullable:false})
    roleId!: number;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
