import { Injectable } from '@nestjs/common'
import {
	Ability,
	AbilityBuilder,
	AbilityClass,
	InferSubjects,
} from '@casl/ability'
import { User } from '../../@generated/prisma-nestjs-graphql/user/user.model'
import { Role } from 'src/@generated/prisma-nestjs-graphql/role/role.model'

export enum Action {
	manage = 'manage', // wildcard for any action
	create = 'create',
	read = 'read',
	update = 'update',
	delete = 'delete',
}

export type Subjects = InferSubjects<typeof User> | 'all'

export type AppAbility = Ability<[Action, Subjects]>

export type RoleFlatTypings = [a: Action, b: boolean]

@Injectable()
export class AbilityFactory {
	defineAbility(user: User) {
		// define rules
		const { build, can, cannot } = new AbilityBuilder(
			Ability as AbilityClass<AppAbility>,
		)
		this.userAbilityMap(can, cannot)(user.role)
		return build()
	}

	private userAbilityMap(
		can: AbilityBuilder<AppAbility>['can'],
		cannot: AbilityBuilder<AppAbility>['cannot'],
	) {
		return function mapAbility(roleActions: Role) {
			const roleActionsMappedArray = Object.entries(roleActions)
			roleActionsMappedArray
				.filter(
					([roleName]: RoleFlatTypings) =>
						roleName === Action.create ||
						roleName === Action.read ||
						roleName === Action.update ||
						roleName === Action.delete,
				)
				.map(([roleName, canOrCannot]: RoleFlatTypings) =>
					canOrCannot ? can(roleName, User) : cannot(roleName, User),
				)
		}
	}
}
