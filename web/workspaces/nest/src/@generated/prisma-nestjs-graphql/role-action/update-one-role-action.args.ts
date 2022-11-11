import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoleActionUpdateInput } from './role-action-update.input';
import { Type } from 'class-transformer';
import { RoleActionWhereUniqueInput } from './role-action-where-unique.input';

@ArgsType()
export class UpdateOneRoleActionArgs {

    @Field(() => RoleActionUpdateInput, {nullable:false})
    @Type(() => RoleActionUpdateInput)
    data!: RoleActionUpdateInput;

    @Field(() => RoleActionWhereUniqueInput, {nullable:false})
    @Type(() => RoleActionWhereUniqueInput)
    where!: RoleActionWhereUniqueInput;
}
