import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'
import { CreateStoreInput } from './dto/create-store.input'
import { UpdateStoreInput } from './dto/update-store.input'
import { Prisma } from '@prisma/client'

@Injectable()
export class StoreService {
	constructor(private prisma: PrismaService) {}

	create(createStoreInput: CreateStoreInput) {
		return 'This action adds a new store'
	}

	findAll() {
		return this.prisma.store.findMany()
		// return `This action returns all store`;
	}

	findOne(storeWhereUniqeInput: Prisma.StoreWhereUniqueInput) {
		return this.prisma.store.findUnique({
			where: storeWhereUniqeInput,
		})
		// return `This action returns a #${id} store`
	}

	update(id: number, updateStoreInput: UpdateStoreInput) {
		return `This action updates a #${id} store`
	}

	remove(id: number) {
		return `This action removes a #${id} store`
	}
}
