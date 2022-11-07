import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TagCreateNestedManyWithoutPostsInput } from '../tag/tag-create-nested-many-without-posts.input';

@InputType()
export class PostCreateWithoutAuthorInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => Boolean, {nullable:true})
    published?: boolean;

    @Field(() => Int, {nullable:true})
    viewCount?: number;

    @Field(() => TagCreateNestedManyWithoutPostsInput, {nullable:true})
    tags?: TagCreateNestedManyWithoutPostsInput;
}
