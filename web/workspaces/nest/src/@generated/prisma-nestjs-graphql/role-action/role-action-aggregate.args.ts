import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoleActionWhereInput } from './role-action-where.input';
import { Type } from 'class-transformer';
import { RoleActionOrderByWithRelationInput } from './role-action-order-by-with-relation.input';
import { RoleActionWhereUniqueInput } from './role-action-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RoleActionCountAggregateInput } from './role-action-count-aggregate.input';
import { RoleActionAvgAggregateInput } from './role-action-avg-aggregate.input';
import { RoleActionSumAggregateInput } from './role-action-sum-aggregate.input';
import { RoleActionMinAggregateInput } from './role-action-min-aggregate.input';
import { RoleActionMaxAggregateInput } from './role-action-max-aggregate.input';

@ArgsType()
export class RoleActionAggregateArgs {

    @Field(() => RoleActionWhereInput, {nullable:true})
    @Type(() => RoleActionWhereInput)
    where?: RoleActionWhereInput;

    @Field(() => [RoleActionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RoleActionOrderByWithRelationInput>;

    @Field(() => RoleActionWhereUniqueInput, {nullable:true})
    cursor?: RoleActionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => RoleActionCountAggregateInput, {nullable:true})
    _count?: RoleActionCountAggregateInput;

    @Field(() => RoleActionAvgAggregateInput, {nullable:true})
    _avg?: RoleActionAvgAggregateInput;

    @Field(() => RoleActionSumAggregateInput, {nullable:true})
    _sum?: RoleActionSumAggregateInput;

    @Field(() => RoleActionMinAggregateInput, {nullable:true})
    _min?: RoleActionMinAggregateInput;

    @Field(() => RoleActionMaxAggregateInput, {nullable:true})
    _max?: RoleActionMaxAggregateInput;
}
