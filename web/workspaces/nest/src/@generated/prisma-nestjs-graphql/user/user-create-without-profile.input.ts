import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateNestedManyWithoutAuthorInput } from '../post/post-create-nested-many-without-author.input';
import { RoleCreateNestedOneWithoutUserInput } from '../role/role-create-nested-one-without-user.input';

@InputType()
export class UserCreateWithoutProfileInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    password?: string;

    @Field(() => PostCreateNestedManyWithoutAuthorInput, {nullable:true})
    posts?: PostCreateNestedManyWithoutAuthorInput;

    @Field(() => RoleCreateNestedOneWithoutUserInput, {nullable:false})
    role!: RoleCreateNestedOneWithoutUserInput;
}
