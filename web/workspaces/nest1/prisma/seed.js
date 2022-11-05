import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
	await prisma.donation.deleteMany()
	await prisma.shop.deleteMany()
	await prisma.product.deleteMany()

	const firstShop = await prisma.shop.create({
		data: {
			address: 'some intresting adress',
			shopName: 'first shop',
		},
	})

	const coffe = await prisma.product.create({
		data: {
			count: 5,
			price: 20,
			productName: 'coffe',
			type: 'water',
			// deliveryDate: new Date('05.05.2022'),
			// expirationDate: new Date('05.05.2022'),
			shopId: 1,
		},
	})

	const candy = await prisma.product.create({
		data: {
			count: 5,
			price: 20,
			productName: 'candy',
			type: 'candy',
			// deliveryDate: new Date('05.05.2022'),
			// expirationDate: new Date('05.05.2022'),
			shopId: 1,
		},
	})

	const fish = await prisma.product.create({
		data: {
			count: 5,
			price: 20,
			productName: 'fish',
			type: 'seafood',
			// deliveryDate: '05.05.2022',
			// expirationDate: '05.05.2022',
			shopId: 1,
		},
	})

	const alice = await prisma.donation.create({
		data: {
			email: 'alisce@prisma.io',
			displayName: 'Alice',
			count: 5,
		},
	})

	console.log({ alice, fish, firstShop, coffe, candy })
}

main()
	.catch((e) => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})