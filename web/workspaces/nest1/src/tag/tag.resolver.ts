import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { TagService } from './tag.service'
import { CreateTagInput } from './dto/create-tag.input'
import { UpdateTagInput } from './dto/update-tag.input'
import { TagUpdateInput } from '../@generated/prisma-nestjs-graphql/tag/tag-update.input'
import { TagCreateInput } from '../@generated/prisma-nestjs-graphql/tag/tag-create.input'

@Resolver('Tag')
export class TagResolver {
	constructor(private readonly tagService: TagService) {}

	@Mutation('createTag')
	create(@Args('createTagInput') createTagInput: TagCreateInput) {
		return this.tagService.create(createTagInput)
	}

	@Query('tags')
	findAll() {
		return this.tagService.findAll()
	}

	@Query('tag')
	findOne(@Args('id') id: number) {
		return this.tagService.findOne({ id })
	}

	@Mutation('updateTag')
	update(
		@Args('id') id: number,
		@Args('updateTagInput') updateTagInput: TagUpdateInput,
	) {
		return this.tagService.update(id, updateTagInput)
	}

	@Mutation('removeTag')
	remove(@Args('id') id: number) {
		return this.tagService.remove(id)
	}
}
