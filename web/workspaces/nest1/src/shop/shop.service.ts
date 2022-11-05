import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { PrismaService } from '../../prisma/prisma.service'
import { CreateShopInput } from './dto/create-shop.input'
import { UpdateShopInput } from './dto/update-shop.input'

@Injectable()
export class ShopService {
	constructor(private prisma: PrismaService) {}

	create(createShopInput: CreateShopInput) {
		return 'This action adds a new shop'
	}

	findAll() {
		return this.prisma.shop.findMany()
		// return `This action returns all shop`;
	}

	findOne(shopWhereUniqueInput: Prisma.ShopWhereUniqueInput) {
		console.log(shopWhereUniqueInput)
		return this.prisma.shop.findUnique({ where: shopWhereUniqueInput })

		// return `This action returns a #${id} shop`
	}

	update(id: number, updateShopInput: UpdateShopInput) {
		return `This action updates a #${id} shop`
	}

	remove(id: number) {
		return `This action removes a #${id} shop`
	}
}
