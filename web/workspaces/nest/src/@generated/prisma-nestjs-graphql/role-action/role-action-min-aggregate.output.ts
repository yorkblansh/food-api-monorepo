import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class RoleActionMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Boolean, {nullable:true})
    manage?: boolean;

    @Field(() => Boolean, {nullable:true})
    create?: boolean;

    @Field(() => Boolean, {nullable:true})
    read?: boolean;

    @Field(() => Boolean, {nullable:true})
    update?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
}
