import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RoleMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    manage?: true;

    @Field(() => Boolean, {nullable:true})
    create?: true;

    @Field(() => Boolean, {nullable:true})
    read?: true;

    @Field(() => Boolean, {nullable:true})
    update?: true;

    @Field(() => Boolean, {nullable:true})
    delete?: true;
}
