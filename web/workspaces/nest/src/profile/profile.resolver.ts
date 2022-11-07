import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { ProfileService } from './profile.service'
// import { CreateProfileInput } from './dto/create-profile.input';
import { UpdateProfileInput } from './dto/update-profile.input'
import { ProfileCreateInput } from '../@generated/prisma-nestjs-graphql/profile/profile-create.input'
import { ProfileUpdateInput } from '../@generated/prisma-nestjs-graphql/profile/profile-update.input'
import { UserWhereUniqueInput } from '../@generated/prisma-nestjs-graphql/user/user-where-unique.input'

@Resolver('Profile')
export class ProfileResolver {
	constructor(private readonly profileService: ProfileService) {}

	@Mutation('createProfile')
	create(
		@Args('userWhereUniqueInput') userWhereUniqueInput: UserWhereUniqueInput,
		@Args('createProfileInput') createProfileInput: ProfileCreateInput,
	) {
		return this.profileService.create(userWhereUniqueInput, createProfileInput)
	}

	@Query('profiles')
	findAll() {
		return this.profileService.findAll()
	}

	@Query('profile')
	findOne(@Args('id') id: number) {
		return this.profileService.findOne({ id })
	}

	@Mutation('updateProfile')
	update(
		@Args('id') id: number,
		@Args('updateProfileInput') updateProfileInput: ProfileUpdateInput,
	) {
		return this.profileService.update(id, updateProfileInput)
	}

	@Mutation('removeProfile')
	remove(@Args('id') id: number) {
		return this.profileService.remove(id)
	}
}
