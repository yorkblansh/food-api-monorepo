import { Injectable } from '@nestjs/common'
// import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'
import { PrismaService } from '../../prisma/prisma.service'
import { Prisma } from '@prisma/client'
import { UserCreateInput } from '../@generated/prisma-nestjs-graphql/user/user-create.input'
import { UserUpdateInput } from 'src/@generated/prisma-nestjs-graphql/user/user-update.input'

@Injectable()
export class UserService {
	constructor(private readonly prismaService: PrismaService) {}

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

	findOne(userWhereUniqueInput: Prisma.UserWhereUniqueInput) {
		return this.prismaService.user.findUnique({
			where: userWhereUniqueInput,
			include: {
				posts: true,
				profile: true,
				role: true,
			},
		})
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
