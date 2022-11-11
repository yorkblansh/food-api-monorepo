import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoleActionUpdateManyMutationInput } from './role-action-update-many-mutation.input';
import { Type } from 'class-transformer';
import { RoleActionWhereInput } from './role-action-where.input';

@ArgsType()
export class UpdateManyRoleActionArgs {

    @Field(() => RoleActionUpdateManyMutationInput, {nullable:false})
    @Type(() => RoleActionUpdateManyMutationInput)
    data!: RoleActionUpdateManyMutationInput;

    @Field(() => RoleActionWhereInput, {nullable:true})
    @Type(() => RoleActionWhereInput)
    where?: RoleActionWhereInput;
}
