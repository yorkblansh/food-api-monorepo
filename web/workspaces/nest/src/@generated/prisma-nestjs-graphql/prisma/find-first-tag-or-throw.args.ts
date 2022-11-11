import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TagWhereInput } from '../tag/tag-where.input';
import { Type } from 'class-transformer';
import { TagOrderByWithRelationInput } from '../tag/tag-order-by-with-relation.input';
import { TagWhereUniqueInput } from '../tag/tag-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TagScalarFieldEnum } from '../tag/tag-scalar-field.enum';

@ArgsType()
export class FindFirstTagOrThrowArgs {

    @Field(() => TagWhereInput, {nullable:true})
    @Type(() => TagWhereInput)
    where?: TagWhereInput;

    @Field(() => [TagOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TagOrderByWithRelationInput>;

    @Field(() => TagWhereUniqueInput, {nullable:true})
    cursor?: TagWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [TagScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TagScalarFieldEnum>;
}
