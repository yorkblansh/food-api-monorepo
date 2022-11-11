import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TagWhereUniqueInput } from '../tag/tag-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueTagOrThrowArgs {

    @Field(() => TagWhereUniqueInput, {nullable:false})
    @Type(() => TagWhereUniqueInput)
    where!: TagWhereUniqueInput;
}
