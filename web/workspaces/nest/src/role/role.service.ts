import { Injectable } from '@nestjs/common'
import { RoleCreateInput } from '../@generated/prisma-nestjs-graphql/role/role-create.input'
import { RoleUpdateInput } from '../@generated/prisma-nestjs-graphql/role/role-update.input'
import { PrismaService } from '../../prisma/prisma.service'
import { CreateRoleInput } from './dto/create-role.input'
import { UpdateRoleInput } from './dto/update-role.input'
import { RoleWhereUniqueInput } from 'src/@generated/prisma-nestjs-graphql/role/role-where-unique.input'

@Injectable()
export class RoleService {
	constructor(private readonly prismaService: PrismaService) {}

	create(createRoleInput: RoleCreateInput) {
		return this.prismaService.role.create({ data: createRoleInput })
		// return 'This action adds a new role'
	}

	findAll() {
		return this.prismaService.role.findMany({
			include: {
				user: true,
			},
		})
		// return `This action returns all role`;
	}

	findOne(roleWhereUniqueInput: RoleWhereUniqueInput) {
		return this.prismaService.role.findUnique({
			where: roleWhereUniqueInput,
			include: {
				user: true,
			},
		})
		// return `This action returns a #${id} role`
	}

	update(originUsername: string, updateRoleInput: RoleUpdateInput) {
		return this.prismaService.role.update({
			data: updateRoleInput,
			where: {
				name: originUsername,
			},
		})
		// return `This action updates a #${originUsername} role`
	}

	remove(id: number) {
		return `This action removes a #${id} role`
	}
}
