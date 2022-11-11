import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { PostUpdateManyWithoutAuthorNestedInput } from '../post/post-update-many-without-author-nested.input';
import { RoleUpdateOneRequiredWithoutUserNestedInput } from '../role/role-update-one-required-without-user-nested.input';

@InputType()
export class UserUpdateWithoutProfileInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    email?: NullableStringFieldUpdateOperationsInput;

    @Field(() => PostUpdateManyWithoutAuthorNestedInput, {nullable:true})
    posts?: PostUpdateManyWithoutAuthorNestedInput;

    @Field(() => RoleUpdateOneRequiredWithoutUserNestedInput, {nullable:true})
    role?: RoleUpdateOneRequiredWithoutUserNestedInput;
}
