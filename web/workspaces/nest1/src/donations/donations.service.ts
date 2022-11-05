import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'
import { CreateDonationInput } from './dto/create-donation.input'
import { UpdateDonationInput } from './dto/update-donation.input'
import { Prisma } from '@prisma/client'

@Injectable()
export class DonationsService {
	constructor(private prisma: PrismaService) {}

	create(createDonationInput: CreateDonationInput) {
		return 'This action adds a new donation'
	}

	findAll() {
		return this.prisma.donation.findMany()
		// return [
		// 	{
		// 		count: 1
		// 	}
		// ]
		// return `This action returns all donations`;
	}

	findOne(donationWhereUniqueInput: Prisma.DonationWhereUniqueInput) {
		const { id } = donationWhereUniqueInput
		return this.prisma.donation.findUnique({
			where: { id },
		})
		// return `This action returns a #${id} donation`
	}

	update(id: number, updateDonationInput: UpdateDonationInput) {
		return `This action updates a #${id} donation`
	}

	remove(id: number) {
		return `This action removes a #${id} donation`
	}
}
