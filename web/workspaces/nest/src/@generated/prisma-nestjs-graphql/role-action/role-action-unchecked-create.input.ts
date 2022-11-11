import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class RoleActionUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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
}
