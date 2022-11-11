import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoleActionCreateInput } from './role-action-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneRoleActionArgs {

    @Field(() => RoleActionCreateInput, {nullable:false})
    @Type(() => RoleActionCreateInput)
    data!: RoleActionCreateInput;
}
