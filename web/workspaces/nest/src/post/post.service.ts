import { Injectable } from '@nestjs/common'
// import { CreatePostInput } from './dto/create-post.input'
import { UpdatePostInput } from './dto/update-post.input'
import { PrismaService } from '../../prisma/prisma.service'
import { Prisma } from '@prisma/client'
import { PostCreateInput } from '../@generated/prisma-nestjs-graphql/post/post-create.input'
import { PostUpdateInput } from '../@generated/prisma-nestjs-graphql/post/post-update.input'
import { PostWhereUniqueInput } from '../@generated/prisma-nestjs-graphql/post/post-where-unique.input'

@Injectable()
export class PostService {
	constructor(private readonly prismaService: PrismaService) {}

	create(createPostInput: PostCreateInput) {
		return this.prismaService.post.create({ data: createPostInput })

		// return 'This action adds a new post'
	}

	findAll() {
		return this.prismaService.post.findMany({
			include: {
				tags: true,
			},
		})

		// return `This action returns all post`;
	}

	findOne(postWhereUniqueInput: PostWhereUniqueInput) {
		return this.prismaService.post.findUnique({
			where: postWhereUniqueInput,
			include: {
				author: true,
				tags: true,
			},
		})
		// return `This action returns a #${id} post`
	}

	update(id: number, updatePostInput: PostUpdateInput) {
		return this.prismaService.post.update({
			data: updatePostInput,
			where: { id },
		})
		// return `This action updates a #${id} post`
	}

	remove(id: number) {
		return this.prismaService.post.delete({
			where: { id },
		})
		// return `This action removes a #${id} post`
	}
}
