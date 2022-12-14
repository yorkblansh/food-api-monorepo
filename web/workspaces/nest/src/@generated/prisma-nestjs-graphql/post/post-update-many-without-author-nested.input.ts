import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateWithoutAuthorInput } from './post-create-without-author.input';
import { Type } from 'class-transformer';
import { PostCreateOrConnectWithoutAuthorInput } from './post-create-or-connect-without-author.input';
import { PostUpsertWithWhereUniqueWithoutAuthorInput } from './post-upsert-with-where-unique-without-author.input';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { PostUpdateWithWhereUniqueWithoutAuthorInput } from './post-update-with-where-unique-without-author.input';
import { PostUpdateManyWithWhereWithoutAuthorInput } from './post-update-many-with-where-without-author.input';
import { PostScalarWhereInput } from './post-scalar-where.input';

@InputType()
export class PostUpdateManyWithoutAuthorNestedInput {

    @Field(() => [PostCreateWithoutAuthorInput], {nullable:true})
    @Type(() => PostCreateWithoutAuthorInput)
    create?: Array<PostCreateWithoutAuthorInput>;

    @Field(() => [PostCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => PostCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<PostCreateOrConnectWithoutAuthorInput>;

    @Field(() => [PostUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => PostUpsertWithWhereUniqueWithoutAuthorInput)
    upsert?: Array<PostUpsertWithWhereUniqueWithoutAuthorInput>;

    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    set?: Array<PostWhereUniqueInput>;

    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    disconnect?: Array<PostWhereUniqueInput>;

    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    delete?: Array<PostWhereUniqueInput>;

    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    connect?: Array<PostWhereUniqueInput>;

    @Field(() => [PostUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => PostUpdateWithWhereUniqueWithoutAuthorInput)
    update?: Array<PostUpdateWithWhereUniqueWithoutAuthorInput>;

    @Field(() => [PostUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    @Type(() => PostUpdateManyWithWhereWithoutAuthorInput)
    updateMany?: Array<PostUpdateManyWithWhereWithoutAuthorInput>;

    @Field(() => [PostScalarWhereInput], {nullable:true})
    @Type(() => PostScalarWhereInput)
    deleteMany?: Array<PostScalarWhereInput>;
}
