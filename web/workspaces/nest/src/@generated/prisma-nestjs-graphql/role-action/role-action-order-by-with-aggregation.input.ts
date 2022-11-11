import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RoleActionCountOrderByAggregateInput } from './role-action-count-order-by-aggregate.input';
import { RoleActionAvgOrderByAggregateInput } from './role-action-avg-order-by-aggregate.input';
import { RoleActionMaxOrderByAggregateInput } from './role-action-max-order-by-aggregate.input';
import { RoleActionMinOrderByAggregateInput } from './role-action-min-order-by-aggregate.input';
import { RoleActionSumOrderByAggregateInput } from './role-action-sum-order-by-aggregate.input';

@InputType()
export class RoleActionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    manage?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    create?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    read?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    update?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    delete?: keyof typeof SortOrder;

    @Field(() => RoleActionCountOrderByAggregateInput, {nullable:true})
    _count?: RoleActionCountOrderByAggregateInput;

    @Field(() => RoleActionAvgOrderByAggregateInput, {nullable:true})
    _avg?: RoleActionAvgOrderByAggregateInput;

    @Field(() => RoleActionMaxOrderByAggregateInput, {nullable:true})
    _max?: RoleActionMaxOrderByAggregateInput;

    @Field(() => RoleActionMinOrderByAggregateInput, {nullable:true})
    _min?: RoleActionMinOrderByAggregateInput;

    @Field(() => RoleActionSumOrderByAggregateInput, {nullable:true})
    _sum?: RoleActionSumOrderByAggregateInput;
}
