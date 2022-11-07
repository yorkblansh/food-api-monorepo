import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { UserService } from './user.service'
import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'
import { UserCreateInput } from '../@generated/prisma-nestjs-graphql/user/user-create.input'
import { UserUpdateInput } from '../@generated/prisma-nestjs-graphql/user/user-update.input'

@Resolver('User')
export class UserResolver {
	constructor(private readonly userService: UserService) {}

	@Mutation('createUser')
	create(@Args('createUserInput') createUserInput: UserCreateInput) {
		return this.userService.create(createUserInput)
	}

	@Query('users')
	findAll() {
		return this.userService.findAll()
	}

	@Query('user')
	findOne(@Args('id') id: number) {
		return this.userService.findOne({ id })
	}

	@Mutation('updateUser')
	update(
		@Args('originUsername') originUsername: string,
		@Args('updateUserInput') updateUserInput: UserUpdateInput,
	) {
		return this.userService.update(originUsername, updateUserInput)
	}

	@Mutation('removeUser')
	remove(@Args('id') id: number) {
		return this.userService.remove(id)
	}
}
