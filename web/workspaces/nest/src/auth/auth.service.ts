import { HttpException, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UserWhereUniqueInput } from '../@generated/prisma-nestjs-graphql/user/user-where-unique.input'
import { UserWhereInput } from 'src/@generated/prisma-nestjs-graphql/user/user-where.input'
import { UserCreateInput } from '../@generated/prisma-nestjs-graphql/user/user-create.input'
import { User } from '../@generated/prisma-nestjs-graphql/user/user.model'
// import { UserModel } from "common/interfaces/user.interface"
// import { UserAlreadyExistException } from '../exceptions/user-name-is-taken.exception'
import { UserService } from '../user/user.service'
import { UUser } from './auth.resolver'
import { Either, right } from '@sweet-monads/either'
import { flow, identity, pipe } from 'fp-ts/lib/function'

@Injectable()
export class AuthService {
	constructor(
		private readonly usersService: UserService,
		private readonly jwtService: JwtService,
	) {}

	async validateUserRole(username: string) {
		const user = await this.usersService.findOne({ name: username })
		return user.role
	}

	async checkIsUserExist(username: string) {
		const user = await this.usersService.findOne({ name: username })
		if (user && user.name === username) {
			// const { password, ...result } = user
			return true
		} else {
			return false
		}
	}

	async validateUser(username: string, password: string) {
		const user = await this.usersService.findOne({ name: username })
		if (user && user.password === password) {
			const { password, ...result } = user
			return result
		}
		return null
	}

	async loginUser(user: UserWhereUniqueInput) {
		const userEither = await this.usersService.findValidatedUser(user)
		return userEither
			.mapLeft((userNotFoundError) => userNotFoundError)
			.mapRight((user) => ({
				user,
				token: this.jwtService.sign({
					username: user.name,
					// sub: user.id,
					// role: user.,
				}),
			})).value
	}

	async registerUser(user: User) {
		const { name: username, password, email } = user

		const isUserExist = await this.checkIsUserExist(username)
		console.log(`isUserNameFree: ${isUserExist}`)

		if (isUserExist) {
			throw new HttpException(username, 212)
			// throw new UserAlreadyExistException(username)
		} else {
			const potentialUser: UserCreateInput = {
				name: username,
				password,
				email,
				role: { connect: { name: 'generic' } },
				// role: 'user',
			}
			this.usersService.create(potentialUser)
			return { status: 'ok' }
		}
	}
}
