import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoleActionWhereInput } from './role-action-where.input';
import { Type } from 'class-transformer';
import { RoleActionOrderByWithAggregationInput } from './role-action-order-by-with-aggregation.input';
import { RoleActionScalarFieldEnum } from './role-action-scalar-field.enum';
import { RoleActionScalarWhereWithAggregatesInput } from './role-action-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { RoleActionCountAggregateInput } from './role-action-count-aggregate.input';
import { RoleActionAvgAggregateInput } from './role-action-avg-aggregate.input';
import { RoleActionSumAggregateInput } from './role-action-sum-aggregate.input';
import { RoleActionMinAggregateInput } from './role-action-min-aggregate.input';
import { RoleActionMaxAggregateInput } from './role-action-max-aggregate.input';

@ArgsType()
export class RoleActionGroupByArgs {

    @Field(() => RoleActionWhereInput, {nullable:true})
    @Type(() => RoleActionWhereInput)
    where?: RoleActionWhereInput;

    @Field(() => [RoleActionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<RoleActionOrderByWithAggregationInput>;

    @Field(() => [RoleActionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof RoleActionScalarFieldEnum>;

    @Field(() => RoleActionScalarWhereWithAggregatesInput, {nullable:true})
    having?: RoleActionScalarWhereWithAggregatesInput;

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
