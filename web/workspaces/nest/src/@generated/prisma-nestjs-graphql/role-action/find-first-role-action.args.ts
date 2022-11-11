import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoleActionWhereInput } from './role-action-where.input';
import { Type } from 'class-transformer';
import { RoleActionOrderByWithRelationInput } from './role-action-order-by-with-relation.input';
import { RoleActionWhereUniqueInput } from './role-action-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RoleActionScalarFieldEnum } from './role-action-scalar-field.enum';

@ArgsType()
export class FindFirstRoleActionArgs {

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

    @Field(() => [RoleActionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof RoleActionScalarFieldEnum>;
}
