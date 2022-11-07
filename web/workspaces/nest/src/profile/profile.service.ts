import { Injectable } from '@nestjs/common'
import { ProfileWhereUniqueInput } from '../@generated/prisma-nestjs-graphql/profile/profile-where-unique.input'
import { PrismaService } from '../../prisma/prisma.service'
import { CreateProfileInput } from './dto/create-profile.input'
import { UpdateProfileInput } from './dto/update-profile.input'
import { ProfileCreateInput } from '../@generated/prisma-nestjs-graphql/profile/profile-create.input'
import { ProfileUpdateInput } from '../@generated/prisma-nestjs-graphql/profile/profile-update.input'
import { UserWhereUniqueInput } from 'src/@generated/prisma-nestjs-graphql/user/user-where-unique.input'

@Injectable()
export class ProfileService {
	constructor(private readonly prismaService: PrismaService) {}

	create(
		UserWhereUniqueInput: UserWhereUniqueInput,
		createProfileInput: ProfileCreateInput,
	) {
		return this.prismaService.profile.create({
			data: {
				bio: createProfileInput.bio,
				user: {
					connect: {
						id: UserWhereUniqueInput.id,
						email: UserWhereUniqueInput.email,
					},
				},
			},
		})
	}

	findAll() {
		return this.prismaService.profile.findMany()
	}

	findOne(profileWhereUniqueInput: ProfileWhereUniqueInput) {
		return this.prismaService.profile.findUnique({
			where: profileWhereUniqueInput,
			include: { user: true },
		})
	}

	update(id: number, updateProfileInput: ProfileUpdateInput) {
		return this.prismaService.profile.update({
			data: updateProfileInput,
			where: { id },
		})
	}

	remove(id: number) {
		return this.prismaService.profile.delete({
			where: { id },
		})
	}
}
