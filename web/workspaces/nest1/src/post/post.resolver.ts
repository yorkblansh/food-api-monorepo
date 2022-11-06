import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { PostService } from './post.service'
// import { CreatePostInput } from './dto/create-post.input'
import { UpdatePostInput } from './dto/update-post.input'
import { PostCreateInput } from '../@generated/prisma-nestjs-graphql/post/post-create.input'
import { PostUpdateInput } from '../@generated/prisma-nestjs-graphql/post/post-update.input'

@Resolver('Post')
export class PostResolver {
	constructor(private readonly postService: PostService) {}

	@Mutation('createPost')
	create(@Args('createPostInput') createPostInput: PostCreateInput) {
		return this.postService.create(createPostInput)
	}

	@Query('posts')
	findAll() {
		return this.postService.findAll()
	}

	@Query('post')
	findOne(@Args('id') id: number) {
		return this.postService.findOne({ id })
	}

	@Mutation('updatePost')
	update(
		@Args('id') id: number,
		@Args('updatePostInput') updatePostInput: PostUpdateInput,
	) {
		return this.postService.update(id, updatePostInput)
	}

	@Mutation('removePost')
	remove(@Args('id') id: number) {
		return this.postService.remove(id)
	}
}
