import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { UserWhereInput } from 'src/@generated/prisma-nestjs-graphql/user/user-where.input'
import { UserWhereUniqueInput } from '../@generated/prisma-nestjs-graphql/user/user-where-unique.input'
// import { User } from '../@generated/prisma-nestjs-graphql/user/user.model'
import { AuthService } from './auth.service'
// import { PostService } from './post.service'
// // import { CreatePostInput } from './dto/create-post.input'
// import { UpdatePostInput } from './dto/update-post.input'
// import { PostCreateInput } from '../@generated/prisma-nestjs-graphql/post/post-create.input'
// import { PostUpdateInput } from '../@generated/prisma-nestjs-graphql/post/post-update.input'

export interface UUser {
	name: string
	password: string
}

@Resolver('Auth')
export class AuthResolver {
	constructor(private readonly authService: AuthService) {}

	// @Mutation('createPost')
	// create(@Args('createPostInput') createPostInput: PostCreateInput) {
	// 	return this.authService.create(createPostInput)
	// }

	// @Query('loginUser')
	// loginUser() {
	// 	return this.authService.loginUser()
	// }

	// @Query('post')
	// findOne(@Args('id') id: number) {
	// 	return this.authService.findOne({ id })
	// }

	@Query('loginUser')
	loginUser(@Args('userLoginData') user: UserWhereUniqueInput) {
		return this.authService.loginUser(user)
	}

	// @Mutation('removePost')
	// remove(@Args('id') id: number) {
	// 	return this.authService.remove(id)
	// }
}
