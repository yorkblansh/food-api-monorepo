import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoleActionWhereUniqueInput } from './role-action-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueRoleActionArgs {

    @Field(() => RoleActionWhereUniqueInput, {nullable:false})
    @Type(() => RoleActionWhereUniqueInput)
    where!: RoleActionWhereUniqueInput;
}
