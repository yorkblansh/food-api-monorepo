import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { TagListRelationFilter } from '../tag/tag-list-relation-filter.input';

@InputType()
export class PostWhereInput {

    @Field(() => [PostWhereInput], {nullable:true})
    AND?: Array<PostWhereInput>;

    @Field(() => [PostWhereInput], {nullable:true})
    OR?: Array<PostWhereInput>;

    @Field(() => [PostWhereInput], {nullable:true})
    NOT?: Array<PostWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    content?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    published?: BoolFilter;

    @Field(() => IntFilter, {nullable:true})
    viewCount?: IntFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    author?: UserRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    authorId?: IntNullableFilter;

    @Field(() => TagListRelationFilter, {nullable:true})
    tags?: TagListRelationFilter;
}
