import { Injectable } from '@nestjs/common'
import { TagWhereUniqueInput } from '../@generated/prisma-nestjs-graphql/tag/tag-where-unique.input'
import { PrismaService } from '../../prisma/prisma.service'
import { CreateTagInput } from './dto/create-tag.input'
import { UpdateTagInput } from './dto/update-tag.input'
import { TagUpdateInput } from '../@generated/prisma-nestjs-graphql/tag/tag-update.input'
import { TagCreateInput } from '../@generated/prisma-nestjs-graphql/tag/tag-create.input'

@Injectable()
export class TagService {
	constructor(private readonly prismaService: PrismaService) {}

	create(
		// TagWhereUniqueInput: TagWhereUniqueInput,
		createTagInput: TagCreateInput,
	) {
		return this.prismaService.tag.create({
			data: createTagInput,
		})
	}

	findAll() {
		return this.prismaService.tag.findMany({
			include: {
				posts: true,
			},
		})
		// return `This action returns all tag`;
	}

	findOne(tagWhereUniqueInput: TagWhereUniqueInput) {
		return this.prismaService.tag.findUnique({
			where: tagWhereUniqueInput,
			include: { posts: true },
		})
		// return `This action returns a #${id} tag`
	}

	update(id: number, updateTagInput: TagUpdateInput) {
		return this.prismaService.tag.update({
			data: updateTagInput,
			where: { id },
		})
		// return `This action updates a #${id} tag`
	}

	remove(id: number) {
		return this.prismaService.tag.delete({
			where: { id },
		})
		// return `This action removes a #${id} tag`
	}
}
