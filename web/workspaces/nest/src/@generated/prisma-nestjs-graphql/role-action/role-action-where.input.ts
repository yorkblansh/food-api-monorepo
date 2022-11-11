import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class RoleActionWhereInput {

    @Field(() => [RoleActionWhereInput], {nullable:true})
    AND?: Array<RoleActionWhereInput>;

    @Field(() => [RoleActionWhereInput], {nullable:true})
    OR?: Array<RoleActionWhereInput>;

    @Field(() => [RoleActionWhereInput], {nullable:true})
    NOT?: Array<RoleActionWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    manage?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    @Type(() => BoolFilter)
    create?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    read?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    @Type(() => BoolFilter)
    update?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    @Type(() => BoolFilter)
    delete?: BoolFilter;
}
