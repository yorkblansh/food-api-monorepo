import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { UserUpdateOneWithoutPostsNestedInput } from '../user/user-update-one-without-posts-nested.input';
import { TagUpdateManyWithoutPostsNestedInput } from '../tag/tag-update-many-without-posts-nested.input';

@InputType()
export class PostUpdateInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    content?: NullableStringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    published?: BoolFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    viewCount?: IntFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneWithoutPostsNestedInput, {nullable:true})
    author?: UserUpdateOneWithoutPostsNestedInput;

    @Field(() => TagUpdateManyWithoutPostsNestedInput, {nullable:true})
    tags?: TagUpdateManyWithoutPostsNestedInput;
}
