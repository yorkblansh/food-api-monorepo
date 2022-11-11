import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { RoleService } from './role.service'
import { CreateRoleInput } from './dto/create-role.input'
import { UpdateRoleInput } from './dto/update-role.input'
import { RoleCreateInput } from '../@generated/prisma-nestjs-graphql/role/role-create.input'
import { RoleUpdateInput } from '../@generated/prisma-nestjs-graphql/role/role-update.input'

@Resolver('Role')
export class RoleResolver {
	constructor(private readonly roleService: RoleService) {}

	@Mutation('createRole')
	create(@Args('createRoleInput') createRoleInput: RoleCreateInput) {
		return this.roleService.create(createRoleInput)
	}

	@Query('roles')
	findAll() {
		return this.roleService.findAll()
	}

	@Query('role')
	findOne(@Args('id') id: number) {
		return this.roleService.findOne({ id })
	}

	@Mutation('updateRole')
	update(
		@Args('originRoleName') originUsername: string,
		@Args('updateRoleInput') updateRoleInput: RoleUpdateInput,
	) {
		return this.roleService.update(originUsername, updateRoleInput)
	}

	@Mutation('removeRole')
	remove(@Args('id') id: number) {
		return this.roleService.remove(id)
	}
}
