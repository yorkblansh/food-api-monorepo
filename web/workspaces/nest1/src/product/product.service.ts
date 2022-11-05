import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { PrismaService } from '../../prisma/prisma.service'
import { CreateProductInput } from './dto/create-product.input'
import { UpdateProductInput } from './dto/update-product.input'

@Injectable()
export class ProductService {
	constructor(private prisma: PrismaService) {}

	create(createProductInput: CreateProductInput) {
		return 'This action adds a new product'
	}

	async findAll() {
		return this.prisma.product.findMany()
		// return gg
		// return `This action returns all product`
	}

	findOne(productWhereUniqueInput: Prisma.ProductWhereUniqueInput) {
		console.log(productWhereUniqueInput)
		return this.prisma.product.findUnique({ where: productWhereUniqueInput })
		// return `This action returns a #${id} product`;
	}

	update(id: number, updateProductInput: UpdateProductInput) {
		return `This action updates a #${id} product`
	}

	remove(id: number) {
		return `This action removes a #${id} product`
	}
}
