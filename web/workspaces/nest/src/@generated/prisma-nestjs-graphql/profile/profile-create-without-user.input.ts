import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';

@InputType()
export class ProfileCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    @Validator.MinLength(5)
    bio?: string;
}
