import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoleActionWhereInput } from './role-action-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyRoleActionArgs {

    @Field(() => RoleActionWhereInput, {nullable:true})
    @Type(() => RoleActionWhereInput)
    where?: RoleActionWhereInput;
}
