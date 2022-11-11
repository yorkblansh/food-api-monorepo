import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedManyWithoutRoleInput } from '../user/user-create-nested-many-without-role.input';

@InputType()
export class RoleCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Boolean, {nullable:true})
    manage?: boolean;

    @Field(() => Boolean, {nullable:true})
    create?: boolean;

    @Field(() => Boolean, {nullable:true})
    read?: boolean;

    @Field(() => Boolean, {nullable:true})
    update?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserCreateNestedManyWithoutRoleInput, {nullable:true})
    user?: UserCreateNestedManyWithoutRoleInput;
}
