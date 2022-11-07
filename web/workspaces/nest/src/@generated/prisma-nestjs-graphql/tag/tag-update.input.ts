import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PostUpdateManyWithoutTagsNestedInput } from '../post/post-update-many-without-tags-nested.input';

@InputType()
export class TagUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => PostUpdateManyWithoutTagsNestedInput, {nullable:true})
    posts?: PostUpdateManyWithoutTagsNestedInput;
}
