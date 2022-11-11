import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class RoleActionScalarWhereWithAggregatesInput {

    @Field(() => [RoleActionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<RoleActionScalarWhereWithAggregatesInput>;

    @Field(() => [RoleActionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<RoleActionScalarWhereWithAggregatesInput>;

    @Field(() => [RoleActionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<RoleActionScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    manage?: BoolWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    @Type(() => BoolWithAggregatesFilter)
    create?: BoolWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    read?: BoolWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    @Type(() => BoolWithAggregatesFilter)
    update?: BoolWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    @Type(() => BoolWithAggregatesFilter)
    delete?: BoolWithAggregatesFilter;
}
