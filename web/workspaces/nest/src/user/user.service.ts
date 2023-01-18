import { Injectable } from '@nestjs/common'
// import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'
import { PrismaService } from '../../prisma/prisma.service'
import { Prisma } from '@prisma/client'
import { UserCreateInput } from '../@generated/prisma-nestjs-graphql/user/user-create.input'
import { UserUpdateInput } from '../@generated/prisma-nestjs-graphql/user/user-update.input'
import { UserWhereUniqueInput } from '../@generated/prisma-nestjs-graphql/user/user-where-unique.input'
import { UserWhereInput } from '../@generated/prisma-nestjs-graphql/user/user-where.input'
import { Either, left, right } from '@sweet-monads/either'
import { User } from '../@generated/prisma-nestjs-graphql/user/user.model'
import { UserNotFoundException } from '../exceptions/user-not-found.exception'
import { pipe } from 'fp-ts/lib/function'
import * as E from 'fp-ts/lib/Either'
import * as O from 'fp-ts/lib/Option'
import { consoleLog } from '../utils/consoleLog'

// class UserNotFoundError extends UserNotFoundException {
// 	name: 'UserNotFoundError'
// }

@Injectable()
export class UserService {
	constructor(public prismaService: PrismaService) {}

	create(createUserInput: UserCreateInput) {
		return this.prismaService.user.create({ data: createUserInput })
		// return 'This action adds a new user'
	}

	findAll() {
		return this.prismaService.user.findMany({
			include: {
				posts: true,
				profile: true,
				role: true,
			},
		})
		// return `This action returns all user`;
	}

	public async findValidatedUser(
		user: UserWhereUniqueInput,
	): Promise<Either<UserNotFoundException, User>> {
		try {
			const userArray = await this.prismaService.user.findMany({
				where: {
					AND: [{ name: user.name }, { password: user.password }],
				},
				include: {
					posts: false,
					profile: false,
					role: false,
				},
			})

			const isUserNotFound = userArray === undefined || userArray.length == 0
			return isUserNotFound
				? left(new UserNotFoundException(user.name))
				: right(userArray[0])
		} catch (error) {}
	}

	async findOne(userWhereUniqueInput: UserWhereUniqueInput) {
		return pipe(
			await this.prismaService.user.findUnique({
				where: userWhereUniqueInput,
				include: {
					posts: true,
					profile: true,
					role: true,
				},
			}),
			(user) =>
				user ? E.right(user) : E.left(new UserNotFoundException(user.name)),
			consoleLog,
		)
	}

	update(originUsername: string, updateUserInput: UserUpdateInput) {
		return this.prismaService.user.update({
			data: updateUserInput,
			where: { name: originUsername },
		})
	}

	remove(id: number) {
		return this.prismaService.user.delete({
			where: { id },
		})
		// return `This action removes a #${id} user`
	}
}
