import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class RoleCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    manage!: number;

    @Field(() => Int, {nullable:false})
    create!: number;

    @Field(() => Int, {nullable:false})
    read!: number;

    @Field(() => Int, {nullable:false})
    update!: number;

    @Field(() => Int, {nullable:false})
    delete!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
