import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { RoleCount } from './role-count.output';

@ObjectType()
export class Role {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    manage!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    create!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    read!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    update!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    delete!: boolean;

    @Field(() => [User], {nullable:true})
    user?: Array<User>;

    @Field(() => RoleCount, {nullable:false})
    _count?: RoleCount;
}
