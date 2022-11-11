import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoleActionWhereUniqueInput } from './role-action-where-unique.input';
import { Type } from 'class-transformer';
import { RoleActionCreateInput } from './role-action-create.input';
import { RoleActionUpdateInput } from './role-action-update.input';

@ArgsType()
export class UpsertOneRoleActionArgs {

    @Field(() => RoleActionWhereUniqueInput, {nullable:false})
    @Type(() => RoleActionWhereUniqueInput)
    where!: RoleActionWhereUniqueInput;

    @Field(() => RoleActionCreateInput, {nullable:false})
    @Type(() => RoleActionCreateInput)
    create!: RoleActionCreateInput;

    @Field(() => RoleActionUpdateInput, {nullable:false})
    @Type(() => RoleActionUpdateInput)
    update!: RoleActionUpdateInput;
}
