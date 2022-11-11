import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RoleActionCountAggregate } from './role-action-count-aggregate.output';
import { RoleActionAvgAggregate } from './role-action-avg-aggregate.output';
import { RoleActionSumAggregate } from './role-action-sum-aggregate.output';
import { RoleActionMinAggregate } from './role-action-min-aggregate.output';
import { RoleActionMaxAggregate } from './role-action-max-aggregate.output';

@ObjectType()
export class RoleActionGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Boolean, {nullable:false})
    manage!: boolean;

    @Field(() => Boolean, {nullable:false})
    create!: boolean;

    @Field(() => Boolean, {nullable:false})
    read!: boolean;

    @Field(() => Boolean, {nullable:false})
    update!: boolean;

    @Field(() => Boolean, {nullable:false})
    delete!: boolean;

    @Field(() => RoleActionCountAggregate, {nullable:true})
    _count?: RoleActionCountAggregate;

    @Field(() => RoleActionAvgAggregate, {nullable:true})
    _avg?: RoleActionAvgAggregate;

    @Field(() => RoleActionSumAggregate, {nullable:true})
    _sum?: RoleActionSumAggregate;

    @Field(() => RoleActionMinAggregate, {nullable:true})
    _min?: RoleActionMinAggregate;

    @Field(() => RoleActionMaxAggregate, {nullable:true})
    _max?: RoleActionMaxAggregate;
}
