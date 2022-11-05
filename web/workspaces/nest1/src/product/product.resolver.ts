import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { ProductService } from './product.service'
import { CreateProductInput } from './dto/create-product.input'
import { UpdateProductInput } from './dto/update-product.input'
import { Prisma } from '@prisma/client'

@Resolver('Product')
export class ProductResolver {
	constructor(private readonly productService: ProductService) {}

	@Mutation('createProduct')
	create(@Args('createProductInput') createProductInput: CreateProductInput) {
		return this.productService.create(createProductInput)
	}

	@Query('products')
	findAll() {
		const bb = this.productService.findAll()
		// console.log(bb)
		return bb
	}

	@Query('product')
	findOne(
		@Args('id')
		id: Prisma.ProductWhereUniqueInput,
	) {
		return this.productService.findOne(id)
	}

	@Mutation('updateProduct')
	update(@Args('updateProductInput') updateProductInput: UpdateProductInput) {
		return this.productService.update(updateProductInput.id, updateProductInput)
	}

	@Mutation('removeProduct')
	remove(@Args('id') id: number) {
		return this.productService.remove(id)
	}
}
